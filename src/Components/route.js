import { Component } from "react";
import { withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";

class Routing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicle: [{"vehicle": "car", "color": "purple"}, {"vehicle": "bike", "color": "green"}, {"vehicle": "foot", "color": "blue"}, {"vehicle": "hike", "color": "darkblue"}, {"vehicle": "mtb", "color": "darkgreen"}, {"vehicle": "racingbike", "color": "black"}, {"vehicle": "scooter", "color": "blue"}, {"vehicle": "truck", "color": "blue"}, {"vehicle": "small_truck", "color": "blue"}]
		}
	}

	componentDidMount() {
		this.createLeafletElement();
	}

	createLeafletElement() {
		let apiKey = "e7a79afb-245d-47bc-8f68-518e717d2fce";
		let vehicle = [{ "vehicle": "car", "color": "purple" }, { "vehicle": "bike", "color": "green" }, { "vehicle": "foot", "color": "blue" }, { "vehicle": "hike", "color": "darkblue" }, { "vehicle": "mtb", "color": "darkgreen" }, { "vehicle": "racingbike", "color": "black" }, { "vehicle": "scooter", "color": "blue" }, { "vehicle": "truck", "color": "blue" }, { "vehicle": "small_truck", "color": "blue" }]
		let selectedVehicle = 2;
		
		let leafletElement = L.Routing.control({
			"waypoints": [
				L.latLng(this.props.pointA.x, this.props.pointA.y),
				L.latLng(this.props.pointB.x, this.props.pointB.y),
			],
			"router": new L.Routing.graphHopper(apiKey, {
				"urlParameters": {
					"vehicle": vehicle[selectedVehicle].vehicle,
					"locale": "es"
				}
			}),
			"lineOptions": {
				"styles": [
					{
						"color": vehicle[selectedVehicle].color,
						"opacity": 0.6,
						"weight": 4
					}
				]
			},
			"routeWhileDragging":true,
			"addWaypoints": false,
			//drag
			"draggableWaypoints": true,
			//put on screen the route
			"fitSelectedRoutes": true,
			"showAlternatives": false
		}).addTo(this.props.map.leafletElement);
		leafletElement.hide();
		leafletElement.on("routeselected", (e) => console.log(e.route.instructions));
	}

	render() {
		return false
	}
}
export default withLeaflet(Routing);