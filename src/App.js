import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      markers: [
        {position: [40.419992, -3.6909257], popup: "Puerta de alcalá"},
        { position: [40.41695, -3.7037602], popup: "Fuente derecha"},
        { position: [40.416895, -3.7043942], popup: "Fuente izquierda"},
        { position: [40.4199823, -3.6887104], popup: "Real Puerta de alcalá" },
        { position: [40.41695, -3.7037602], popup: "Fuente derecha" },
        { position: [40.416895, -3.7043942], popup: "Fuente izquierda" },
        { position: [40.454676, -3.70232878], popup: "Silvaga rules"}
      ]
    }
    this.generateMarker = this.generateMarker.bind(this);
  }

  removeMarker(id) {
    console.log(id);
    let markers = Array.from(this.state.markers);
    markers.splice(id, 1)
    this.setState({...this.state, markers: markers})
  }

  printMarker() {
    return this.state.markers.map((el, id) => {
      console.log("printed", el)
      return (
        <Marker position={el.position} key={id} onContextMenu={() => this.removeMarker(id)}>
          <Popup>{el.popup}</Popup>
        </Marker>
      )
    })
  }

  generateMarker(event) {
    this.setState({...this.state, markers: [...this.state.markers, {position: [event.latlng.lat, event.latlng.lng], popup: "Añadido con click"}]})
  }

  render() {
    return (
      <Map center={[40.416775, -3.703790]} zoom={25} maxZoom={19} onDblClick={this.generateMarker}   >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {this.printMarker()}
      </Map>
    );
  }
}