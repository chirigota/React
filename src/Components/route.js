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
		let apiKey = "1a74686f-220e-43c4-9da7-363a1639a13e";
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
				],
				"addWaypoints": false
			},
			"routeWhileDragging":true,
			"addWaypoints": true,
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