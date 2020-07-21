import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'





class OnBoarding2 extends Component {
	
	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>2</h1></div>
				<h2 className="hOb">Elige <br></br>categoría</h2>
					<p className="pOb">Selecciona el tipo de comercio al que te quieres dirigir</p>
				<Image />
			</div>
		)
	}
};

export default OnBoarding2;