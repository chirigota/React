import React from 'react';
import './Header.css';
// import Map from "./Map/Map";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Mapa",
			// image: "images/logoCr.png",
			url: "/"
		}
	}

	render() {
		return (
			<div className="header">
				{/* <Map /> */}

			</div>
		);
	}
}



export default Header;