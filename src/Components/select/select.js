import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./select.scss";

async function handleFill(event, state, setState, props) {
	let value = event.target.value;
	if (value[value.length - 2] == '´' && "aeiou".includes(value[value.length - 1])) {
		let char;
		switch (value[value.length - 1]) {
			case "a":
				char = "á";
				break;
			case "e":
				char = "é";
				break;
			case "i":
				char = "í";
				break;
			case "o":
				char = "ó";
				break;
			case "u":
				char = "ú";
		}
		value = value.substr(0, value.length - 2) + char;
	}
	console.log(value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
	try {
		let data = await fetch(`http://localhost:3001/street/${value === props.defaultValue ? "" : value}`);
		data = await data.json()//.then(data => data.json()).then(data => setState({...state, data}));
		setState({ ...state, value, data });
	} catch (e) {
		setState({ ...state, value });
	}
}

function handleArrow(state, setState, ref) {
	if (state.focused) {
		setState({ ...state, "focused": false });
	} else {
		ref.input.focus();
	}
}

function handleOption(state, setState, props, ref, value) {
	if (value === "Tu ubicación")
		value = "Ubicación actual";
	if (ref.changeFocus) {
		clearTimeout(ref.changeFocus);
		ref.changeFocus = undefined;
	}
	props.selectOption(value);
	setState({ ...state, "focused": false, "selectedValue": value, value });
}

function selectOption(e, state, setState, props, ref, value) {
	if (e.key === " ") {
		handleOption(state, setState, props, ref, value);
	}

}

async function changeFocus(state, setState, newState, ref, props) {
	let data = state.data;
	if (ref.changeFocus) {
		clearTimeout(ref.changeFocus);
		ref.changeFocus = undefined;
	} else {
		data = await (await fetch(`http://localhost:3001/street/${state.value === props.defaultValue ? "" : state.value}`)).json()//.then(data => data.json()).then(data => setState({ ...state, data }));
		ref.input.select();
	}
	setState({ ...state, "focused": newState, data });
}

function printOptions(state, setState, props, ref) {
	let options = state.data && state.data.map((data, index) => {
		return (
			<div key={index + 1} onKeyUp={(e) => selectOption(e, state, setState, props, ref, data)} onClick={() => handleOption(state, setState, props, ref, data)} onFocus={() => changeFocus(state, setState, true, ref, props)} onBlur={() => ref.changeFocus = setTimeout(() => changeFocus(state, setState, false, ref, props), 100)} tabIndex={0} >
				<div className="img">
					<img src="/IMG/lupa.svg" alt="Imágen de una lupa" />
				</div>
				<p>{data}</p>
			</div>
		);
	});
	if (options && options.length > 0)
		options.unshift(<hr key={-1} />)
	options.unshift(<div key={0} onKeyUp={(e) => selectOption(e, state, setState, props, ref, "Tu ubicación")} onClick={() => handleOption(state, setState, props, ref, "Tu ubicación")} onFocus={() => changeFocus(state, setState, true, ref, props)} onBlur={() => ref.changeFocus = setTimeout(() => changeFocus(state, setState, false, ref, props), 100)} tabIndex={0} >
		<div className="img">
			<img src="/IMG/ubicacion.svg" alt="Imágen de una diana" />
		</div>
		<p>{"Tu ubicación"}</p>
	</div>)
	return options;
}

function Select(props) {
	const [state, setState] = useState({ "value": "", "selectedValue": "", "focused": false });
	useEffect(() => {
		let value = props.defaultValue || "";
		setState({ ...state, "value": value, "selectedValue": value })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.defaultValue]);
	let idMultiplier = 99999;
	let id = `Select${Math.floor(Math.random() * idMultiplier)}`;
	let ref = { "global": undefined, "input": undefined, "arrow": undefined, "changeFocus": undefined };
	return (
		<div className={`input customSelect ${state.focused && "focus"}`} role="listbox" ref={(el) => ref.global = el}>
			<label htmlFor={id}>{props.label}</label>
			<input type={props.type ? props.type : "text"} onFocus={() => changeFocus(state, setState, true, ref, props)} onBlur={() => ref.changeFocus = setTimeout(() => changeFocus(state, setState, false, ref, props), 100)} placeholder={props.placeholder || "Select..."} aria-required={props.required === true} ref={(el) => ref.input = el} id={id} value={state.value} onChange={(e) => handleFill(e, state, setState, props)}></input>
			<div className="searchIcon" ref={(el) => ref.arrow = el} onClick={() => handleArrow(state, setState, ref)}>
				<img src="/IMG/lupawhite.svg" alt="Imágen de una lupa" />
			</div>
			{state.focused && <section className="scroll">
				{printOptions(state, setState, props, ref)}
			</section>}
		</div>
	);
}

Select.propTypes = {
	"required": PropTypes.bool,
	"type": PropTypes.string,
	"placeholder": PropTypes.string,
	"selectOption": PropTypes.func
};

export default Select;