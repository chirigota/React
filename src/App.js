import React, { Component } from "react";
import Container from "./Components/Container";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import CategoryPicker from "./Components/selectCategory/SelectCategory2.js";
import { CategoryProvider } from "./Contexts/categoryContext.js";
import OnBoarding from './Components/onboarding/OnBoarding';
import Profile from './Components/login/views/Profile';
import Login from './Components/login/views/Login';
// import Signup from './Components/login/views/SignUp';
import Error from './Components/login/views/Error';
// import Carrusel from './Components/Map/Carrusel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Store from './Components/store/Store';
import Points from './Components/login/views/Points';
import QR from './Components/login/views/QR';
import { AuthContext } from "./Components/login/context/AuthContext";
import Store from './Components/store/Store';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"selected": undefined,
			"redirectTo": undefined,
			"pointB": undefined,
			"coords": undefined
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
						<CategoryProvider value={{ "pointB": this.state.pointB, 
						"selected": this.state.selected, "redirectTo": this.redirectTo, 
						"coords": this.state.coords, 
						"selectStreet": (coords) => {this.setState({...this.state, coords}); 
						console.log(coords)},"selectCategory": (selected, redirectTo = undefined, pointB = []) => { this.setState({ ...this.state, selected, redirectTo, pointB }) } }}>
							<Route exact path="/store">
								<Store />
							</Route>
							<Route exact path="/" component={CategoryPicker} />
							<Route exact path="/map" component={Container} />
						</CategoryProvider>
						<Route path="*">
							<Error />
						</Route>
					</Switch>
				</Router>
			</AuthContext>
			// /* /* create a context for the map */ 

// 		// <Route exact path="/search">
// 		// 	<Header/>
// 		// 	<Map />
//  		// 	<Footer/>
// 		// </Route> */}
		);
	}
}
