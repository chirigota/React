import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'



class OnBoarding7 extends Component {


	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>7</h1></div>
					<h2 className="hOb">Acumula y gana promociones</h2>
					<p className="pOb">Por cada consumo que hagas en un establecimiento en verde, acumularás puntos que podrás canjear en diferentes promociones</p>
				<Image />
			</div>
		)
	}
};

export default OnBoarding7;