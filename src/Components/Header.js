import React from 'react';
import './Header.css';
import { Button } from 'antd';


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
					<Button>
					Atrás
					</Button>
					<Button> Panadería</Button>
					<Button>Fav</Button>
			</div>
		);
	}
}



export default Header;