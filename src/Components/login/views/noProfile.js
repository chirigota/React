import React, { Component} from 'react';
import Rectangle2 from './Rectangle2';
import firebaseConfig from "../Firebaseconfig";
import './../../onboarding/OnBoarding.css'


class Profile extends Component{
	//mirar traslado de Dashboard
	render(){
		return(
			<div className="profileContainer">
				<div ><img className="iconArrow"src="images/arrow.png" alt="atrás"></img></div>
				<p className="profileTitle">
					Nombre de usuario
				</p>
				<div className="profileTextContainer"> 
					<a className="profileText" href="/generadorqr">Lector de QR</a>
					<a className="profileText" href="/puntos">Tus puntos</a>
					<a className="profileText" href="/favoritos">Tus favoritos</a>
					<a className="profileText" href="/ajustes">Ajustes de Perfil</a>
					<a className="profileText" href="/ayuda">Ayuda</a>
				</div>
				<div className="close">
					<button className="btnClose" onClick={() => firebaseConfig.auth().signOut()} >Cerrar Sesión</button>
				</div>
				<Rectangle2 />
			</div>
			

		)
	}
}

export default Profile;