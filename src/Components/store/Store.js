import React, {Component} from 'react';
import Grafic from './Grafic'
import './Store.css'

class Store extends Component{

	render(){
		return(
			<div className="storeContainer">
				<div className="storePicContainer">
					<a href="/map" className="storeArrowBack">
						<img className="iconStoreArrowBack" src="images/arrow.png" alt="atrás" style={{
							width: '100 %', display: 'flex', flexDirection: 'row'
						}}></img></a>
					<img className="storePic" src="https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAN2p9hjOeG5NTaz9j5H5Hqseys5hip3LINZHQ8m8C0Ubmk5SL0siDeV0S20XHVGH0eberk2tQ8VXY7bUHwp7mrA4D_GkSoHpvubGczz9GPkiIygBkmCqvaHr-YNXzSsd4EhBPNH0Rs8X3fnzjMoZW_a0UGhQKHmwP4tavOeNsVdt4qrw9IGlwMg&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyC5XW2GEHpsKykU2Sdvt0MP4aNX0rCySpA"
					 alt="foto de comercio"/>
				</div>
				<div className="storeInfoContainer">
					<p className="storeName">Nombre establecimiento <img className="heart"src="images/corazon-20.svg" alt="corazón"/></p>
					<p className="storeType">Tipo de comercio</p>
					<p className="storeAddress">  Dirección del comercio</p>
				<div className="storeRanking">
					<p className="storeAvailability"><img className="storeMarker" src="images/landmark-verde-20.svg" alt="círculo" />Ahora hay poca gente</p>
					<p className="storeStars"><img className="storeStar" src="images/estrella-16.svg" alt="estrella" />4.5 (10)</p>
						
				</div>
				<div className="storeGrafic"></div>
					<Grafic />
					<button className="btnRoute">Ver ruta</button>
				</div>
				
			</div>
		)
	}
}
export default Store;