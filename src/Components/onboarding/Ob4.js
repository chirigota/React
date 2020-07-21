import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'



class OnBoarding4 extends Component {


	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>4</h1></div>
					<h2 className="hOb">Elige local y visualiza ruta</h2>
					<p className="pOb">Ayúdate del código de color para ver la ocupación e inicia la ruta para llegar a tu destino</p>
				<Image />
			</div>
		)
	}
};

export default OnBoarding4;