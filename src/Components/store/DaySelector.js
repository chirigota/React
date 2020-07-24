import React from "react";
import { Component } from "react";
import './Grafic.css';

class DaySelector extends Component {


	render() {
		return (
			<select className="selectDay" onClick>
				<option value="monday">lunes</option>
				<option value="tuesday">martes</option>
				<option value="wednesday">miércoles</option>
				<option value="thursday">jueves</option>
				<option value="friday">viernes</option>
				<option value="saturday">sábado</option>
				<option value="sunday">domingo</option>
			</select>
		)
	}

}

export default DaySelector;
