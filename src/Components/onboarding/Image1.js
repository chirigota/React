import React, { Component } from 'react';
import OnBoardingConsumer from './../../Contexts/OnBoardingContext';
import './OnBoarding.css';


class Image extends Component {
	constructor() {
		super()
		this.state = {
			step: 1
		}
	}

	render() {
		return (
			<div style={{ maxWidth: '414px', maxHeight: '736px'}}>
				<img className="backapp" src="images/backg0.png" alt="backapp3" style={{ width: '100%' }} />
				<OnBoardingConsumer>
					{(context)=>
					<button  className="btnStart" onClick={()=>context.getStep(this.state.step)}>Comenzar</button>}
				</OnBoardingConsumer>
				
			</div>
		)
	}
};

export default Image;