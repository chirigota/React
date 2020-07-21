import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'



class OnBoarding3 extends Component {
	

	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/category">Saltar</a> </div>
				<div><h1>3</h1></div>
					<h2 className="hOb">Revisa la <br></br>ocupación</h2>
					<p className="pOb">En el mapa te mostraremos los comercios más cercanos y podrás ver su ocupación a tiempo real</p>
				<Image />
			</div>
		)
	}
};

export default OnBoarding3;