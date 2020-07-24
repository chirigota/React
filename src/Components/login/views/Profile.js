import React, { useEffect, useContext, useState } from "react";
import { Layout, Button } from "antd";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";
import firebaseConfig from "../Firebaseconfig";
import Rectangle2 from './Rectangle2';
import { CategoryConsumer } from "../../../Contexts/categoryContext"

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
					width: '100 %', display: 'flex', flexDirection: 'row'
				}}></img></a></div>
			<p className="profileTitle">{name}</p>
			{/* <p className="profileTitleName" >{name}</p> */}

			<CategoryConsumer>
				{(value) =>
					<div className="profileTextContainer">
						<a className="profileText" onClick={() => value.redirectTo("/qrgenerator")}>Generador de QR</a>
						<a className="profileText" onClick={() => value.redirectTo("/points")}>Mis puntos</a>
						<a className="profileText" onClick={() => value.redirectTo("/favoritos")}>Mis favoritos</a>
						<a className="profileText" onClick={() => value.redirectTo("/ajustes")}>Ajustes de Perfil</a>
						<a className="profileText" onClick={() => value.redirectTo("/ayuda")}>Ayuda</a>
					</div>}
			</CategoryConsumer>
			<div className="close">
				<button className="btnClose" onClick={() => firebaseConfig.auth().signOut()} >Cerrar Sesión</button>

			</div>
			<Rectangle2 />
		</div>
	);

}
export default withRouter(Dashboard);
