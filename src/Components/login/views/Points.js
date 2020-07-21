import React, { Component } from 'react';
import './../../onboarding/OnBoarding.css'

class Points extends Component{

	render(){
		return(
			<div className="pointsContainer">
				<img id="points"src="images/medal-1.jpg" alt="medalla"/>
				<h2 className="pointsEarned">¡10 puntos!</h2>
				<p className="pointsText">Muchas gracias por visitar un establecimiento con baja ocupación.</p>
				<p className="pointsText2">¡Te esperamos pronto!</p>
			<button className="sumAndClose">Acumular y cerrar</button>
			</div>
		)
	}
}
export default Points;