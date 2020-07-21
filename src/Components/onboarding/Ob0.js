import React, { Component } from 'react';
import './OnBoarding.css'
import Image1 from './Image1'
import Logo1 from './Logo1'




class OnBoarding extends Component {
	constructor(){
		super()
		this.state ={
			step : 1
		}
	}

	render() {
		return (
			<div className="onBoardingContainer">
				<Logo1 />
				<div className="text1">
					<div className="onboardingtext">
						<p className="one">Ahora puedes saber cuánta </p>
						<p className="two">gente hay en tus tiendas </p>
						<p className="three">favoritas y elegirlas en función </p>
						<p className="four">de su aforo.</p>
						<p className="five">¿Quieres saber cómo?</p>
					</div>
				</div>
				<Image1 />
			</div>
		)
	}
};

export default OnBoarding;