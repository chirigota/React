import React, { Component } from 'react';
import './Rectangle2.css';
import { CategoryConsumer } from "../../../Contexts/categoryContext";

class Rectangle2 extends Component {

	render() {
		return (
			<div id="rectangle2">
				<CategoryConsumer>
					{(value) => <button onClick={() => value.redirectTo("/profile")} className="btnProfile"> <img id="profileLogo" src="images/perfil-32.svg" alt="profile-icon" /></button>}
				</CategoryConsumer>
			</div>
		)
	}
}
export default Rectangle2;