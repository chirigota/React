import React, { Component } from 'react';
import './OnBoarding.css'
import Image from './Image'



class OnBoarding6 extends Component {


	render() {
		return (
			<div className="onBoardingContainer">
				<div className="link"><a href="/login">Saltar</a> </div>
				<div><h1 className="obTitle">6</h1></div>
				<div className="text1">
					<h2 className="hOb">Lee tu código <br></br>QR</h2>
					<p className="pOb">Cuando termines de hacer tu compra, ve a tu perfil, pincha sobre "generador de QR" y muéstraselo al vendedor.</p>
				</div>
				<Image />
			</div>
		)
	}
};

export default OnBoarding6;