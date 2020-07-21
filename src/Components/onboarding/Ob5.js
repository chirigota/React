import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'



class OnBoarding5 extends Component {


	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>5</h1></div>
				<div className="text1">
					<h2 className="hOb">Elige con responsabilidad</h2>
					<p className="pOb">Sabemos que te gustan tus tiendas de siempre, pero si están rojo, te recomendamos elegir otro establecimiento.</p>
				</div>
				<Image />
			</div>
		)
	}
};

export default OnBoarding5;