import React, { Component } from "react";
import Container from "./Components/Container";
import {BrowserRouter as Router, Route, Switch, Browser, Redirect} from "react-router-dom"
import PickLocations from "./Components/pickLocation/PickLocation.js";
import CategoryPicker from "./Components/categoryPicker/CategoryPicker.js";
import context from "./Contexts/categoryContext.js";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"selected": undefined,
			"redirectTo": undefined
		}
	}

	redirect(r) {
		this.setState({...this.state, redirectTo: undefined })
		return <Redirect to={this.state.redirectTo} />
	}

	render() {
		return (
			<div>
				Selected: {this.state.selected}
				<context.Provider value={{"selected": this.state.selected, "selectCategory": (selected, redirectTo = undefined) => {this.setState({...this.state, selected, redirectTo})}}}>
					<Router>
						{this.state.redirectTo && this.redirect()}
						<Switch>
							<Route exact path="/" component={CategoryPicker} />
							<Route exact path="/map" component={Container} />
						</Switch>
					</Router>
				</context.Provider>

				{/* <Container /> */}
			</div>
		);
	}
}