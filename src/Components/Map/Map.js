import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet";
import {CategoryConsumer} from "../../Contexts/categoryContext.js";
import "./map.css";
import Route from "../route.js";
import Footer from './../Footer';
// import CategoryContext from "../Contexts/categoryContext.js";


export default class App extends Component {

	constructor() {
		super();
		this.state = {
			 "markers": [
			// 	 { "position": this.value.coords, 
			// 	 		"popup": "Puerta de alcalá" },
			// 	{ "position": [40.41695, -3.7037602], "popup": "Fuente derecha" },
			// 	{ "position": [40.416895, -3.7043942], "popup": "Fuente izquierda" },
			// 	{ "position": [40.4199823, -3.6887104], "popup": "Real Puerta de alcalá" },
			// 	{ "position": [40.41695, -3.7037602], "popup": "Fuente derecha" },
			// 	{ "position": [40.416895, -3.7043942], "popup": "Fuente izquierda" },
			// 	{ "position": [40.454676, -3.70232878], "popup": "Silvaga rules" }
			],
			"pointA": {"x": 40.419992, "y": -3.6909257},
			"routeRendered": false,
			"selected": 0
		};
		this.generateMarker = this.generateMarker.bind(this);
	}

	removeMarker(id) {
		// console.log(id);
		let markers = Array.from(this.state.markers);
		markers.splice(id, 1);
		this.setState({ ...this.state, "markers": markers });
	}

	printMarker() {
		return this.state.markers.map((el, id) => {
			// console.log("printed", el);
			let size = (id === this.state.selected ? 75 : 50);
			return (
				<Marker position={el.position} key={id} icon={L.icon({
					// if(value >= 20){
					// 	"iconUrl": "landmark-verde-20.svg",
					// } else if(value <=50){
					// "iconUrl": "landmark-verde-20.svg"
					// }else{
					"iconUrl": "landmark-verde-20.svg"
					// }
					,
					
					// "shadowUrl": "https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png",
					iconSize: [size, size], // size of the icon
					shadowSize: [50, 60], // size of the shadow
					iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
					shadowAnchor: [15, 60],  // the same for the shadow
					popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
				})} onContextMenu={() => this.removeMarker(id)}>
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
			<Map center={[40.416775, -3.703790]} zoom={15} maxZoom={19} zoomControl={false} onDblClick={this.generateMarker} ref={this.instantiateMap.bind(this)}>
				<TileLayer
					url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=wmpmiE7gyJPKgHi1lGV8y5uY3jF26Xno7lfGHFLVsRXUkR68hm701leqj8Nr4eb4'
					attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{/* added ZoomControl component to change zoom position  */}
				{/* <ZoomControl position='topright' /> */}
				{/* necesitaría ser CategoryConsumer */}
					{this.printMarker()}

				
				<CategoryConsumer>
					
					{(value) => {
						return (
						<>
							{this.state.map && value.pointB && <Route map={this.state.map} pointA={this.state.pointA} pointB={value.pointB}/>}
						</>
						)
					}}
					
				</CategoryConsumer>
			</Map>
			<CategoryConsumer>
					{(value) => <div className="hola" style={{width:'100vw'}}><Footer /></div>}	
			</CategoryConsumer>
			</>
			
			
		);
	}
}