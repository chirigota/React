import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup} from "react-leaflet";
import {CategoryConsumer} from "../../Contexts/categoryContext.js";
import "./Map.css";
import Route from "../route.js";

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			"markers": [/*
				{ "position": [40.419992, -3.6909257], "popup": "Puerta de alcalá" },
				{ "position": [40.41695, -3.7037602], "popup": "Fuente derecha" },
				{ "position": [40.416895, -3.7043942], "popup": "Fuente izquierda" },
				{ "position": [40.4199823, -3.6887104], "popup": "Real Puerta de alcalá" },
				{ "position": [40.41695, -3.7037602], "popup": "Fuente derecha" },
				{ "position": [40.416895, -3.7043942], "popup": "Fuente izquierda" },
				{ "position": [40.454676, -3.70232878], "popup": "Silvaga rules" }
			*/],
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
					"iconUrl": "IMG/iconG.png",
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
			<Map center={[40.416775, -3.703790]} zoom={15} maxZoom={19} onDblClick={this.generateMarker} ref={this.instantiateMap.bind(this)}>
				<TileLayer
					url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=wmpmiE7gyJPKgHi1lGV8y5uY3jF26Xno7lfGHFLVsRXUkR68hm701leqj8Nr4eb4'
					attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
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
		);
	}
}
// var Jawg_Terrain = L.tileLayer('https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	minZoom: 0,
// 	maxZoom: 22,
// 	subdomains: 'abcd',
// 	accessToken: '<your accessToken>'
// });

// render() {
// 	return (
// 		<Map center={[40.416775, -3.703790]} zoom={25} maxZoom={19} onDblClick={this.generateMarker} ref={this.instantiateMap.bind(this)}>
// 			<TileLayer
// 				url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
// 				attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
// 			/>
// 			{this.printMarker()}
// 			{this.state.map && <Route map={this.state.map} pointA={this.state.pointA} pointB={this.state.pointB} />}
// 		</Map>
// 	);
// }
// }