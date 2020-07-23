// import React, { useEffect, useContext, useState } from "react";
// import Header from "../components/Header";
// import { Layout } from "antd";
// import { Auth } from "../context/AuthContext";
// import { withRouter } from "react-router";
import React, { useEffect, useContext, useState } from "react";
import { Layout, Button } from "antd";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";
import firebaseConfig from "../Firebaseconfig";
import Rectangle2 from './Rectangle2';

const Dashboard = ({ history }) => {
	const { Content, Footer } = Layout;
	const { user } = useContext(Auth);
	const [name, setname] = useState(null)

	useEffect(() => {

		if (user === null) {
			history.push("/login");
		}
		//to set the name for the greeting: now, email address, or in Google, name of the G account
		user ? user.displayName ? setname(user.displayName) : setname(user.email) : setname(null)

	}, [history, user]);


	return (
		<div className="profileContainer">
			<div ><a href="/" className="arrowBack"> 
				<img className="iconArrowProfile" src="images/arrow.png" alt="atrás" style={{
					width: '100 %',display: 'flex',flexDirection: 'row'}}></img></a></div>
					<p className="profileTitle">{name}</p>
						{/* <p className="profileTitleName" >{name}</p> */}
						
				
					<div className="profileTextContainer">
							<a className="profileText" href="/generadorqr">Generador de QR</a>
							<a className="profileText" href="/points">Mis puntos</a>
							<a className="profileText" href="/favoritos">Mis favoritos</a>
							<a className="profileText" href="/ajustes">Ajustes de Perfil</a>
							<a className="profileText" href="/ayuda">Ayuda</a>
						</div>
						<div className="close">
							<button className="btnClose" onClick={() => firebaseConfig.auth().signOut()} >Cerrar Sesión</button>

						</div>
						<Rectangle2 />
					</div>
	);

}
export default withRouter(Dashboard);
