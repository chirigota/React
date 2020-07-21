import React, { Component } from "react";
import firebaseConfig from "../Firebaseconfig";
import { withRouter } from "react-router-dom";
import './Log.css';



class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"name": "",
			"surname": "",
			"user": "",
			"passw": ""
		}
		this.handleInput = this.handleInput.bind(this);
	}

	async handleSignUp(e) {
		console.log("registering")
		e.preventDefault();
		const { user, passw } = this.state;

		await firebaseConfig
			.auth()
			.createUserWithEmailAndPassword(user, passw)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.error(error)
			});
	};

	handleInput(e, name) {
		this.setState({...this.state, [name]: e.target.value});
	}

	render() {
		return (
			<div className="sOaB">
				<img id="logoColor" src="images/logoBlack.svg" />
				
				<div className="formRegister">
					
				<form onSubmit={this.handleSignUp.bind(this)}>
					<input className="inputRegister"type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={(e) => this.handleInput(e, "name")} />
					<input className="inputRegister"type="text" name="surname" placeholder="Apellidos" value={this.state.surname} onChange={(e) => this.handleInput(e, "surname")} />
					<input className="inputRegister"type="text" name="user" placeholder="Email" value={this.state.user} onChange={(e) => this.handleInput(e, "user")} />
					<input className="inputRegister"type="password" name="passw" placeholder="Contraseña" value={this.state.passw} onChange={(e) => this.handleInput(e, "passw")} />
					<input className="inputRegister" type="password2" name="passw2" placeholder="Repite contraseña" />

					<button className="btnRegister">Registrarse</button>
				</form>
				</div>
			</div>
		)
	}
}

export default withRouter(Signup);
