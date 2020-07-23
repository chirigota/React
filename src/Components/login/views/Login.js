import React, { useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
import Signup from "./SignUp";
import { withRouter } from "react-router";
import * as firebase from "firebase";
import firebaseConfig from "../Firebaseconfig";
import { Auth } from "../context/AuthContext";
import Errors from '../../Errors'
import './Log.css'
import Rectangle from '../../onboarding/Rectangle'


const Login = ({ history }) => {
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

	const { Content} = Layout;
	const [signup, setsignup] = useState(false);
	const { user } = useContext(Auth);
	const [error, seterror] = useState('')

	useEffect(() => {
		if (user) {
			history.push("/");
		}
	}, [history, user]);

	const correopassword = async e => {
		e.preventDefault();
		const { user, password } = e.target.elements;

		await firebaseConfig
			.auth()
			.signInWithEmailAndPassword(user.value, password.value)
			.then(result => {
				console.log(result);
				history.push("/");
			})
			.catch(error => {
				seterror(error.message)
			});

	};


	const socialLogin = async (provider) => {
		await firebaseConfig
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				seterror(error.message)
			});
	}



	return (<div>
			<Content
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontFamily:'Roboto'
				}}
			>
				<div
					style={{
						textAlign: "center",
						flexDirection: "column",
						justifyContent: "center",
						display: "flex",
						fontFamily:'Roboto',
						width:'100%'
					}}
				>
					{!signup ? (
						<Form className="login-form" style={{marginBottom: '0%'}} onSubmit={correopassword}>
							{error ? <Form.Item><Errors message={error} /></Form.Item> : null}
						<img id="logoColor" src="images/logoBlack.svg" />
							<Form.Item>
							
								<Input
									className="inputUser"
									name="user"
									placeholder="Introduce tu email"
								/>
							</Form.Item>
							<Form.Item>
								<Input
									className="inputPassw"
									name="password"
									type="password"
									placeholder="Introduce tu Contraseña"
								/>
							</Form.Item>
							<p id="forget">¿Has olvidado la contraseña?</p>
							<Form.Item>
								{/* not available yet */}
								<Button
									type="primary"
									htmlType="submit"
									className="btnLog"
								>
									Iniciar sesión
                                </Button>
								<Button
									type="primary"
									htmlType="submit"
									className="btnNoUser"
								onClick={() => history.push("/")}
								>
								Ingresar sin usuario
                                </Button>
                                <p>¿Todavía no estás registrado?</p>
							
								<p id="here" style={{ fontFamily: "Roboto",fontStyle: "normal",fontWeight: "500",fontSize: "24px",lineHeight: "28px"}} onClick={() => setsignup(true)}
								type="link">Regístrate aquí</p>	
                             
								
								{/* see this option in firebase */}
							</Form.Item>
							<Form.Item>
							<Button id="btnAccess" onClick={() => socialLogin(googleAuthProvider)}>
									<img id="google"src="images/google-32.png" style={{width:'15%'}}
								>
									</img>
							
									<p id="access">Regístrate con Google </p>

								</Button>
							</Form.Item>
						</Form>
					) : (
							<Signup setsignup={setsignup} className="signUpForm"/>
						)}
				</div>
			</Content>
			<Rectangle />	
			</div>
		
	
		
	);
};
export default withRouter(Login);
