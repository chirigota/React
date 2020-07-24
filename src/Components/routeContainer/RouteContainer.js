import React, { Component } from 'react';
import Map from "../Map/Map";

class RouteContainer extends Component {
    render() {
        return (
            <Map renderRoute={true}></Map>
        )
    }
}

export default RouteContainer;
