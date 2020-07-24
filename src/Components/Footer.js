import React, { Component } from 'react';
import { Renderer, DivIcon } from 'leaflet';
import Swipe from './Map/Swipe';
import './Footer.css'
import CategoryContext, { CategoryConsumer } from "./../Contexts/categoryContext";
import { types as categories } from "../JSON/categories.json";

class Footer extends Component {
	static contextType = CategoryContext
	constructor() {
		super();
		this.state = {
			"selected": "",
			"places": [],
			"askForPlaces": false
		}

	};
	componentDidMount() {
		console.log("this.contextType", this.contextType)
		if (this.state.selected) {
			this.setState({ ...this.contextType, })
		}
	};



	generateCards(places, value) {
		return places.map((place) =>
			<div className="slider" onClick={() => { value.selectPlace(place, "/store") }}>
				<img className="imageSlider"
					alt=""
					src={place.url_photo}
				/>
				<h1 className="h1Slider">{place.place_name}</h1>
				<p className="pCategorySlider">{categories.filter(category => category.id == place.type)[0].name}</p>
				<p className="pSliderOccupation">ahora hay poca gente<img className="storeOcupation" src="images/landmark-verde-20.svg" alt="círculo" /></p>
			</div>
		)
	}

	render() {
		return (

			<div className="footer-container" >
				<CategoryConsumer>
					{(value) => {
						console.log("context que me parió", !this.state.places);
						if (!this.state.askForPlaces && value.coords && value.selected !== undefined) {
							this.setState({ ...this.state, askForPlaces: true })
							fetch(`http://localhost:3001/getStores/${value.coords.latitude}/${value.coords.longitude}/${value.selected}`)
								.then(res => res.json())
								.then(places => {
									places.map(place => {
										this.setState({ ...this.state, places: [...this.state.places, place] });
									});
								})
						}
						return <>
							{this.state.places &&
								<Swipe items={this.generateCards(this.state.places, value)} />}
						</>
					}}
				</CategoryConsumer>
			</div>
		)
	}
}
export default Footer;