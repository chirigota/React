import React, {Component} from "react";
import PropTypes from "prop-types";
import "./select.scss";

function handleFill(event, state, setState) {
	setState({ ...state, "value": event.target.value });
}

function handleArrow(state, setState, ref) {
	if (state.focused) {
		setState({ ...state, "focused": false });
	} else {
		ref.input.focus();
	}
}

function handleOption(state, setState, ref, value) {
	if (ref.changeFocus) {
		clearTimeout(ref.changeFocus);
		ref.changeFocus = undefined;
	}
	setState({...state, "focused": false, "selectedValue": value, "value": value}, () => ref.input.focus());
}

function selectOption(e, state, setState, ref, value) {
	if (e.key === " ") {
		handleOption(state, setState, ref, value);
	}

}

function changeFocus(state, setState, newState, ref) {
	if (ref.changeFocus) {
		clearTimeout(ref.changeFocus);
		ref.changeFocus = undefined;
	} else {
		ref.input.select();
	}
	setState({ ...state, "focused": newState });
}

class Select extends Component {
	constructor (props) {
		super(props);
		this.state = {
			"value": "",
			"selectedValue": "",
			"focused": false,
			"id": `Select${Math.floor(Math.random() * 99999)}`,
			"ref": { "global": React.createRef(), "input": React.createRef(), "arrow": React.createRef(), "changeFocus": React.createRef() }
		};
	}

	render() {
		return (
			<div className={`input select ${this.state.focused && "focus"}`} role="listbox" ref={this.state.ref.global}>
				<label htmlFor={this.state.id}>{this.props.label}</label>
				<input onFocus={() => changeFocus(this.state, this.setState, true, this.state.ref)} onBlur={() => this.state.ref.changeFocus = setTimeout(() => changeFocus(this.state, this.setState, false, this.ref), 100 )} placeholder={this.props.placeholder || "Select..."} aria-required={this.props.required === true} ref={this.state.ref.input} id={this.state.id} value={this.state.value} onChange={(e) => handleFill(e, this.state, this.setState)}></input>
				<i className={`fas ${this.state.focused ? "fa-caret-up" : "fa-caret-down"}`} ref={this.state.ref.arrow} onClick={() => handleArrow(this.state, this.setState, this.state.ref)}/>
				{this.state.focused && <section className="scroll">
					{this.props.data.filter(data => data.includes(this.state.value)).map((data, index) => {
						return (
							<div key={index} onKeyUp={(e) => selectOption(e, this.state, this.setState, this.state.ref, this.props.data)} onClick={() => handleOption(this.state, this.setState, this.state.ref, this.props.data)} onFocus={() => changeFocus(this.state, this.setState, true, this.state.ref)} onBlur={this.state.ref.changeFocus = setTimeout(() => changeFocus(this.state, this.setState, false, this.state.ref), 100 )} tabIndex={0} >
								<div className="optionDistinguisher"></div>
								<div className="optionSelected"></div>
								<p>{data}</p>
							</div>
						);
					})}
				</section>}
			</div>
		);
	}
}

Select.propTypes = {
	"required": PropTypes.bool,
	"type": PropTypes.string,
	"placeholder": PropTypes.string,
	"label": PropTypes.string.isRequired
};

export default Select;