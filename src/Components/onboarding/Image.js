import React, { Component } from 'react';
import OnBoardingConsumer from './../../Contexts/OnBoardingContext'
import './OnBoarding.css'


class Image extends Component {
constructor(){
	super()
	this.state = {
		nextStep: true,
		prevStep: false
	}
}

	render() {
		return (
			<div>
				<img className="backapp" src="images/Backg0.png" alt="backapp3" style={{ width: '100%' }} />
				<OnBoardingConsumer>
					{(context) => 
					<div>
					<button className="btnNext" onClick={() => context.calculateStep(this.state.nextStep)}>Siguiente</button>
					<button className="btnBack" onClick={() => context.calculateStep(this.state.prevStep)}>Atrás</button>
					</div>}
				</OnBoardingConsumer>
			</div>
		)
	}
};

export default Image;