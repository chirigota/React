import React, { Component } from 'react';
import { Renderer, DivIcon } from 'leaflet';
import Swipe from './Map/Swipe';
import './Footer.css'

class Footer extends Component {
	render() {
		this.items =
			[
			<div className="slider">
				<img
				alt=""
				src="https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAN2p9hjOeG5NTaz9j5H5Hqseys5hip3LINZHQ8m8C0Ubmk5SL0siDeV0S20XHVGH0eberk2tQ8VXY7bUHwp7mrA4D_GkSoHpvubGczz9GPkiIygBkmCqvaHr-YNXzSsd4EhBPNH0Rs8X3fnzjMoZW_a0UGhQKHmwP4tavOeNsVdt4qrw9IGlwMg&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyC5XW2GEHpsKykU2Sdvt0MP4aNX0rCySpA"
				// style={{ width: '40%' }}
				/>
				<h1>Pastelería Vait</h1>
				<p>PANADERÍA</p>
				<p>ahora hay poca gente</p>
			</div>,
			<div className="slider">
			<img
				alt=""
				src="https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAgLtzdc6ki2ixXSkR-JYX1ylS6dWFoLN9N2wMArtqdo7Y31MHR3MJZr8MNFYrpqxv-Xy4FDUJ0ksG1EVfXvJZvpZ61Mo-WZu62_beEXxkq-x5T537Z-Ku2bdRSBR9iScjEhDpsxOAPzXL-1wBP7PUYsyUGhTnIC9zU1w4s5y0jlEQYYyt_CizWw&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyC5XW2GEHpsKykU2Sdvt0MP4aNX0rCySpA"
				// style={{ width: '40%' }}
			/>
				<h1>Pastelería Vait</h1>
				<p>PANADERÍA</p>
				<p>ahora hay poca gente</p>
			</div>,
			<div className="slider">
			<img
				alt=""
				src="https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAHuBm__OEfrGBdXLCImXuOUV5YUzXvCUVsdpzSPQdLtvZ33e226RZRtBVV9S8rHZgz2TJ48YPmJAl5yS1yLojPb-DgRaIJnw5ZFJ-6pVZS2fdACZ_tsKVjk1gmZEOsXseEhDvjV7Dkv_GuwXc0Z2S1gZmGhQ9vZcE36l8Lh6Zx5JslfSx05U4UA&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyC5XW2GEHpsKykU2Sdvt0MP4aNX0rCySpA"
				
				// style={{ width: '40%' }}
			/>
				<h1>Pastelería Vait</h1>
				<p>PANADERÍA</p>
				<p>ahora hay poca gente</p>
			</div >,
			<div className="slider">
				<img
					alt=""
					src="https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAHuBm__OEfrGBdXLCImXuOUV5YUzXvCUVsdpzSPQdLtvZ33e226RZRtBVV9S8rHZgz2TJ48YPmJAl5yS1yLojPb-DgRaIJnw5ZFJ-6pVZS2fdACZ_tsKVjk1gmZEOsXseEhDvjV7Dkv_GuwXc0Z2S1gZmGhQ9vZcE36l8Lh6Zx5JslfSx05U4UA&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyC5XW2GEHpsKykU2Sdvt0MP4aNX0rCySpA"

					// style={{ width: '40%' }}
				/>
				<h1>Pastelería Vait</h1>
				<p>PANADERÍA</p>
				<p>ahora hay poca gente</p>
			</div>,
			];
		return (
			<div className="footer-container" >
				{/* <div className="footerContainer" style={{ backgroundColor: "red" }, { position: "absolute" }, { bottom: "0px" }, { zIndex: "9999" }}> */}
				<Swipe items={this.items}/>
			</div>
		)
	}
}


export default Footer;