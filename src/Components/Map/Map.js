import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import categoryContext, { CategoryConsumer } from "./../../Contexts/categoryContext";
import "./map.css";
import Route from "../route.js";
import Footer from './../Footer';
import MapHeader from './MapHeader';


export default class App extends Component {
	static contextType = categoryContext

	constructor() {
		super();
		this.state = {
			"markers": [],
			"pointA": { "x": 40.41695, "y": -3.7037602 },
			"routeRendered": false,
			"selected": 0
		};
		this.generateMarker = this.generateMarker.bind(this);
	}

	componentDidMount() {
		console.log("this.context", this.context)
		if (this.context.coords) {
			this.setState({ ...this.context, "markers": [...this.state.markers, { "position": [this.context.coords.latitude, this.context.coords.longitude], "popup": "usuario" }] })
			fetch(`http://localhost:3001/getStores/${this.context.coords.latitude}/${this.context.coords.latitude}/${this.context.selected}`)
				.then(res => res.json())
				.then(
					(places) => {
						console.log(places);
						this.setState({
							...this.state,
							"markers": [...this.state.markers, ...places.map((place) => {
								return {
									"position": [parseFloat(place.lat), parseFloat(place.lng)],
									"popup": place.place_name,
									"color": (place.occupation < 50 ? "verde" : (place.occupation <= 75 ? "amarillo" : "rojo")),
									...place
								}
							})]
						});
					},
				)
		}
	}

	removeMarker(id) {
		let markers = Array.from(this.state.markers);
		markers.splice(id, 1);
		this.setState({ ...this.state, "markers": markers });
	}

	printMarker() {
		return this.state.markers.map((el, id) => {
			let size = (id === this.state.selected ? 50 : 30);
			return (
				<Marker position={el.position} key={id}
					icon={L.icon({
						"iconUrl": `images/landmark-${el.color ? el.color : "verde"}-20.svg`,
						iconSize: [size, size], // size of the icon
					})}
					onContextMenu={() => this.removeMarker(id)}>
					<Popup>{el.popup}</Popup>
				</Marker>
			);
		});
	}

	generateMarker(event) {
		this.setState({ ...this.state, "markers": [...this.state.markers, { "position": [event.latlng.lat, event.latlng.lng], "popup": "Añadido con click" }] });
	}

	instantiateMap(map) {
		if (!this.state.map) {
			this.setState({ ...this.state, "map": map });
		}
	}

	render() {
		return (
			<>
			<div>
				<CategoryConsumer>
						<div ><a href="/" className="arrowBack">
							<img className="iconArrowMap" src="images/arrow.png" alt="atrás"
								style={{
									width: '50 %', display: 'flex', flexDirection: 'row'
								}}></img></a></div>
						{(value) => <button onClick={() => value.redirectTo("/profile")} className="btnProfile"> <img id="profileLogo" src="images/perfil-32.svg" alt="profile-icon" /></button>}
				</CategoryConsumer>
				<MapHeader />
				<Map center={[40.416775, -3.703790]} zoom={15} maxZoom={19} zoomControl={false} onDblClick={this.generateMarker} ref={this.instantiateMap.bind(this)}>
					<TileLayer
						url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=wmpmiE7gyJPKgHi1lGV8y5uY3jF26Xno7lfGHFLVsRXUkR68hm701leqj8Nr4eb4'
						attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>
					{/* added ZoomControl component to change zoom position  */}
					{/* <ZoomControl position='topright' /> */}
					{this.printMarker()}

					<CategoryConsumer>

						{(value) => {
							return (
								<>
									{this.state.map && value.pointB && <Route map={this.state.map} pointA={this.state.pointA} pointB={value.pointB} />}
								</>
							)
						}}

					</CategoryConsumer>
				</Map>
				<CategoryConsumer>
					{(value) => <div className="hola" style={{ width: '100vw' }}><Footer /></div>}
				</CategoryConsumer>
				</div>
			</>


		);
	}
}