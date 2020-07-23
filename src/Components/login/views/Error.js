import React from "react";
import { withRouter } from "react-router";
import './../../onboarding/OnBoarding.css'

const Error = ({ history }) => {
	const goBack = () => {
		history.push("/login");
	}
	return (
		<div className="errorContainer">
			<div className="errorTextAlert">
				<h1 className="errorNumber">404</h1>
				<div className="errorImage">
					<img src="images/marginalia-location-access-3.png" alt="404" />
				</div>
				<h2 className="errorText">not found</h2>
			</div>

			<button className="btnError" onClick={() => goBack()}>Volver</button>


		</div>
	);
};
export default withRouter(Error);



// import React from 'react'
// import Lottie from 'react-lottie';
// import * as animationData from './404.json'
// export default function Error() {
// 	const defaultOptions = {
// 		loop: true,
// 		autoplay: true,
// 		animationData: animationData,
// 		rendererSettings: {
// 			preserveAspectRatio: "xMidYMid slice"
// 		}

// 	};

// 	return (
// 		<div>
// 			<Lottie
// 				options={defaultOptions}
// 				height={400}
// 				width={400}
// 			/>
// 			<button className="btnError" >Volver</button>
// 		</div>
// 	);
// }

// import React from 'react'
// import Lottie from 'react-lottie';
// import * as animationData from './404.json'

// export default class Error extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = { isStopped: false, isPaused: false };

// 	}
// 	render() {
// 		const buttonStyle = {
// 			display: 'block',
// 			margin: '10px auto'
// 		};

// 		const defaultOptions = {
// 			loop: true,
// 			autoplay: true,
// 			animationData: animationData,
// 			rendererSettings: {
// 				preserveAspectRatio: 'xMidYMid slice'
// 			}
// 		};

// 		return <div>
// 			<Lottie options={defaultOptions}
// 				height={400}
// 				width={400}
// 				isStopped={this.state.isStopped}
// 				isPaused={this.state.isPaused} />
// 			<button style={buttonStyle} onClick={() => this.setState({ isStopped: true })}>stop</button>
// 			<button style={buttonStyle} onClick={() => this.setState({ isStopped: false })}>play</button>
// 			<button style={buttonStyle} onClick={() => this.setState({ isPaused: !this.state.isPaused })}>pause</button>
// 			{/* <button className="btnError" onClick={() => goBack()}>Volver</button> */}
// 		</div>
// 	}
// 	}
