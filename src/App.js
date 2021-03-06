import React, { Component } from "react";
import Container from "./Components/Container";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import CategoryPicker from "./Components/selectCategory/SelectCategory.js";
import { CategoryProvider } from "./Contexts/categoryContext.js";
import OnBoarding from './Components/onboarding/OnBoarding';
import Profile from './Components/login/views/Profile';
import Login from './Components/login/views/Login';
import Error from './Components/login/views/Error';
import Points from './Components/login/views/Points';
import QR from './Components/login/views/QR';
import { AuthContext } from "./Components/login/context/AuthContext";
import Store from './Components/store/Store';
import RouteContainer from "./Components/routeContainer/RouteContainer";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"selected": undefined,
			"redirectTo": undefined,
			"pointB": undefined,
			"coords": undefined,
			"place": undefined
		}

		this.redirectTo = this.redirectTo.bind(this);
	}


	redirectTo(redirectTo) {
		this.setState({...this.state, redirectTo});
	}

	getRedirection() {
		let redirectTo = this.state.redirectTo;
		this.setState({...this.state, redirectTo: undefined })
		return <Redirect to={redirectTo} />
	}

	render() {
		return (
			<CategoryProvider value={{
				"pointB": this.state.pointB,
				"selected": this.state.selected, "redirectTo": this.redirectTo,
				"coords": this.state.coords,
				"selectStreet": (coords) => {
					this.setState({ ...this.state, coords });
					console.log(coords)
				}, "selectCategory": (selected, redirectTo = undefined, pointB = []) => { this.setState({ ...this.state, selected, redirectTo, pointB }) },
				"selectPlace": (place, redirectTo = undefined) => { this.setState({ ...this.state, place, redirectTo }) },
				"selectedPlace": this.state.place
			}}>
				<AuthContext>
					<Router>
						{this.state.redirectTo && this.getRedirection()}
						<Switch>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/onboarding">
								<OnBoarding />
							</Route>
							<Route exact path="/profile">
								<Profile />
							</Route>
							<Route exact path="/qrgenerator">
								<QR />
							</Route>
							<Route exact path="/points">
								<Points />
							</Route>
							<Route exact path="/store">
								<Store />
							</Route>
							<Route exact path="/" component={CategoryPicker} />
							<Route exact path="/map" component={Container} />
							<Route exact path="/route" component={RouteContainer} />
							<Route path="*">
								<Error />
							</Route>
						</Switch>
					</Router>
				</AuthContext>
			</CategoryProvider>
		);
	}
}
