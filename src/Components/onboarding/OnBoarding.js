import React, { Component } from 'react';
import OnBoardingContext from './../../Contexts/OnBoardingContext';
import Ob0 from './../onboarding/Ob0';
import Ob1 from './../onboarding/Ob1';
import Ob2 from './../onboarding/Ob2';
import Ob3 from './../onboarding/Ob3';
import Ob4 from './../onboarding/Ob4';
import Ob5 from './../onboarding/Ob5';
import Ob6 from './../onboarding/Ob6';
import Ob7 from './../onboarding/Ob7';
import './OnBoarding.css';
import './Rectangle.css';
import './../login/views/Rectangle2.css';
import './Logo1.css';






class OnBoarding extends Component {
	constructor() {
		super()
		this.state = {
			step: 0
		}
		this.getStep = this.getStep.bind(this)
		this.calculateStep = this.calculateStep.bind(this)
	}
	getStep(step) {
		this.setState({
			...this.state,
			step: step
		})
	}
	calculateStep(step) {
		if (step === true) {
			let newStep = this.state.step + 1
			this.setState({
				...this.state,
				step: newStep
			})
		} else {
			let newStep = this.state.step - 1
			this.setState({
				...this.state,
				step: newStep
			})
		}
	}


	renderSteps() {
		if (this.state.step === 0) {
			return <Ob0 />
		} else if (this.state.step === 1) {
			return <Ob1 />
		} else if (this.state.step === 2) {
			return <Ob2 />
		} else if (this.state.step === 3) {
			return <Ob3 />
		} else if (this.state.step === 4) {
			return <Ob4 />
		} else if (this.state.step === 5) {
			return <Ob5 />
		} else if (this.state.step === 6) {
			return <Ob6 />
		} else {
			return window.location.href = '/login'
		}
	}

	render() {
		return (
			<div className="onBoardingContainer">
				<OnBoardingContext.Provider value={{ getStep: this.getStep, calculateStep: this.calculateStep }}>
					{this.renderSteps()}
				</OnBoardingContext.Provider>
			</div>
		)
	}
};

export default OnBoarding;