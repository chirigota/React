import React, { Component } from "react";
import Container from "./Components/Container";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import CategoryPicker from "./Components/categoryPicker/CategoryPicker.js";
import { CategoryProvider } from "./Contexts/categoryContext.js";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"selected": undefined,
			"redirectTo": undefined,
			"pointB": undefined
		}
	}

	getRedirection() {
		let redirectTo = this.state.redirectTo;
		this.setState({...this.state, redirectTo: undefined })
		return <Redirect to={redirectTo} />
	}

	render() {
		return (
			<div>
				<p>
					PointB: {this.state.pointB && this.state.pointB.x} {this.state.pointB && this.state.pointB.y}
				</p>
				<p>
					Selected: {this.state.selected}	
				</p>
				<CategoryProvider value={{"pointB": this.state.pointB, "selected": this.state.selected, "selectCategory": (selected, redirectTo = undefined, pointB = []) => {this.setState({...this.state, selected, redirectTo, pointB})}}}>
					<Router>
						{this.state.redirectTo && this.getRedirection()}
						<Switch>
							<Route exact path="/" component={CategoryPicker} />
							<Route exact path="/map" component={Container} />
						</Switch>
					</Router>
				</CategoryProvider>

				{/* <Container /> */}
			</div>
		);
	}
}