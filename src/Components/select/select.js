import React, {useState, useEffect} from "react";
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

function handleOption(state, setState, props, ref, value) {
	if (ref.changeFocus) {
		clearTimeout(ref.changeFocus);
		ref.changeFocus = undefined;
	}
	if (props.selectOption)
		props.selectOption(value);
	setState({...state, "focused": false, "selectedValue": value, "value": value}, () => ref.input.focus());
}

function selectOption(e, state, setState, props, ref, value) {
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

function Select(props) {
	const [state, setState] = useState({ "value": "", "selectedValue": "", "focused": false });
	useEffect(() => {
		let value = props.defaultValue || ""
		setState({...state, "value": value, "selectedValue": value})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.defaultValue]);
	let idMultiplier = 99999;
	let id = `Select${Math.floor(Math.random() * idMultiplier)}`;
	let ref = {"global": undefined, "input": undefined, "arrow": undefined, "changeFocus": undefined};
	let data = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
	return (
		<div className={`input select ${state.focused && "focus"}`} role="listbox" ref={(el) => ref.global = el}>
			<label htmlFor={id}>{props.label}</label>
			<input onFocus={() => changeFocus(state, setState, true, ref)} onBlur={() => ref.changeFocus = setTimeout(() => changeFocus(state, setState, false, ref), 100 )} placeholder={props.placeholder || "Select..."} aria-required={props.required === true} ref={(el) => ref.input = el} id={id} value={state.value} onChange={(e) => handleFill(e, state, setState)}></input>
			<i className={`fas ${state.focused ? "fa-caret-up" : "fa-caret-down"}`} ref={(el) => ref.arrow = el} onClick={() => handleArrow(state, setState, ref)}/>
			{state.focused && <section className="scroll">
				{props.data.filter(data => data.toLowerCase().includes(state.value.toLowerCase())).map((data, index) => {
					return (
						<div key={index} onKeyUp={(e) => selectOption(e, state, setState, props, ref, data)} onClick={() => handleOption(state, setState, props,  ref, data)} onFocus={() => changeFocus(state, setState, true, ref)} onBlur={() => ref.changeFocus = setTimeout(() => changeFocus(state, setState, false, ref), 100 )} tabIndex={0} >
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

Select.propTypes = {
	"required": PropTypes.bool,
	"type": PropTypes.string,
	"placeholder": PropTypes.string,
	"label": PropTypes.string.isRequired
};

export default Select;