import React, { Component } from 'react';
import { Renderer, DivIcon } from 'leaflet';
import Swipe from './Map/Swipe';
import './Footer.css'
import CategoryContext, { CategoryConsumer } from "./../Contexts/categoryContext";

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
				<div className="imageContainer">
					<img className="imageSlider"
						alt=""
						src={place.url_photo}
					/>
				</div>
				<h1 className="h1Slider">{place.place_name}</h1>
				<div className="occupationContainer">
					<div className={`occupationMarker ${place.occupation <= 50 ? "green" : place.occupation <= 75 ? "yellow" : "red"}`}></div>
					<p className="pSliderOccupation">{place.occupation <= 50 ? "Ocupación baja" : place.occupation <= 75 ? "Ocupación media" : "Ocupación alta"}</p>
				</div>
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