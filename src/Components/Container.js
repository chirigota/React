import React, { Component } from "react";
import Map from './Map/Map';
import Footer from './Footer';
import { CategoryConsumer } from "../Contexts/categoryContext.js";
import { types as categories } from "../JSON/categories.json";
import MapHeader from './../Components/Map/MapHeader';

class Container extends Component {

	render() {
		return (
			<CategoryConsumer>
				
				{(value) => <>
				
					<Map />
				</>}
			</CategoryConsumer>
		);
	}
}

export default Container;