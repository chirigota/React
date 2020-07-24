import React, { Component } from 'react';
import { CategoryConsumer } from "./../../Contexts/categoryContext";

class MapHeader extends Component {

	render() {
		return (
			<CategoryConsumer>
				<div ><a href="/" className="arrowBack">
					<img className="iconArrowProfile" src="images/arrow.png" alt="atrás"
						style={{
							width: '100 %', display: 'flex', flexDirection: 'row'
						}}></img></a></div>
				{(value) => <button onClick={() => value.redirectTo("/profile")} className="btnProfile"> <img id="profileLogo" src="images/perfil-32.svg" alt="profile-icon" /></button>}
			</CategoryConsumer>
		)
	}
}
export default MapHeader;