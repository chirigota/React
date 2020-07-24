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