import { MapLayer, withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";

class Routing extends MapLayer {
	constructor(props) {
		super(props);
	}

	createLeafletElement() {
		const { map } = this.props;
		let leafletElement = L.Routing.control({
			"waypoints": [
				L.latLng(this.props.pointA.x, this.props.pointA.y),
				L.latLng(this.props.pointB.x, this.props.pointB.y)
			],
			//"router": new L.Routing.Google(),
			"lineOptions": {
				"styles": [
					{
						"color": "purple",
						"opacity": 0.6,
						"weight": 4
					}
				]
			},
			"addWaypoints": false,
			"draggableWaypoints": false,
			"fitSelectedRoutes": false,
			"showAlternatives": false
		}).addTo(map.leafletElement);
		return leafletElement.getPlan();
	}
}
export default withLeaflet(Routing);