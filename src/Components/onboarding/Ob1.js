import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'





class OnBoarding1 extends Component {

	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>1</h1></div>
				<h2 className="hOb">Elige <br></br>ubicación</h2>
					<div className='textContainer'>
					<p className='pOb'>En la pantalla principal utiliza el buscador para indicar la zona de búsqueda</p>
				</div>
				<Image />
			</div>
		)
	}
};

export default OnBoarding1;