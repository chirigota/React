import React, {Component} from "react";
import Map from './Map/Map';
import Footer from './Footer';
import {CategoryConsumer} from "../Contexts/categoryContext.js";
import { types as categories } from "../JSON/categories.json";

class Container extends Component {
	render() {
		return (
				<CategoryConsumer>
					{(value) => 
						<div>
							<p>Selected: {value.selected !== undefined && categories.filter(el => el.id === parseInt(value.selected))[0].name}</p>
							<button onClick = {() => value.redirectTo("/")}>Volver</button>
							<Map />
						</div>
					}
				</CategoryConsumer>
		);
	}
}

export default Container;