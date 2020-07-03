import { MapLayer, withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-graphhopper";

class Routing extends MapLayer {
	constructor(props) {
		super(props);
		this.state = {
			vehicle: [{"vehicle": "car", "color": "purple"}, {"vehicle": "bike", "color": "green"}, {"vehicle": "foot", "color": "blue"}, {"vehicle": "hike", "color": "darkblue"}, {"vehicle": "mtb", "color": "darkgreen"}, {"vehicle": "racingbike", "color": "black"}, {"vehicle": "scooter", "color": "blue"}, {"vehicle": "truck", "color": "blue"}, {"vehicle": "small_truck", "color": "blue"}]
		}
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
					"vehicle": vehicle[selectedVehicle].vehicle
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
			"addWaypoints": false,
			"draggableWaypoints": false,
			"fitSelectedRoutes": false,
			"showAlternatives": false
		}).addTo(this.props.map.leafletElement);
		return leafletElement.getPlan();
	}
}
export default withLeaflet(Routing);