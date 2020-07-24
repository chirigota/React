import React, { Component } from 'react';
import Grafic from './Grafic';
import { CategoryConsumer } from "../../Contexts/categoryContext";
import { types as categories } from "../../JSON/categories.json";
import './Store.css';

class Store extends Component {

	render() {
		return (
			<CategoryConsumer>
				{(value) => {
					if (value.selectedPlace) {
						return <div className="storeContainer">
							<a onClick={() => value.redirectTo("/map")} className="storeArrowBack">
								<img className="iconStoreArrowBack" src="images/arrow.png" alt="atrás" style={{
									width: '100 %', display: 'flex', flexDirection: 'row'
								}}></img></a>
							<div className="storePicContainer">
								<img className="storePic" src={value.selectedPlace.url_photo}
									alt="foto de comercio" />
							</div>
							<div className="storeInfoContainer">
								<p className="storeName">{value.selectedPlace.place_name}
									<img className="heart" src="images/corazon-20.svg" alt="corazón" /></p>
								<p className="storeType">{categories.filter(category => category.id == value.selectedPlace.type)[0].name}</p>
								<p className="storeAddress">{value.selectedPlace.address}</p>
								<div className="storeRanking">
									<p className="storeAvailability"><img className="storeMarker" src="images/landmark-verde-20.svg" alt="círculo" />Ahora hay poca gente</p>
									<p className="storeStars"><img className="storeStar" src="images/estrella-16.svg" alt="estrella" />{`${value.selectedPlace.rating[0]} (${value.selectedPlace.rating[1]})`}</p>

								</div>
								<div className="storeGrafic"></div>
								<Grafic data={value.selectedPlace} />
								<button className="btnRoute" onClick={() => value.redirectTo("/route")}>Ver ruta</button>
							</div>
						</div>
					} else
						value.redirectTo("/");
				}}
			</CategoryConsumer>
		)
	}
}
export default Store;