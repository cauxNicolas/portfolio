import React, { useState } from "react";
import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import About from "./containers/About";
import Contact from "./containers/Contact";
import Work from "./containers/Work";
import Works from "./containers/Works";
import Admin from "./containers/Admin";

// Components
import Menu from "./components/Menu";
import StickyMenu from "./components/StickyMenu";

function App() {
	const [burgerChange, setburgerChange] = useState(true);

	const admin = window.location.pathname;

	if (admin === "/react-admin-connect") {
		return (
			<Router>
				<Admin path="/react-admin-connect" />
			</Router>
		);
	} else {
		return (
			<Router>
				<div className="container">
					{/* Menu */}
					<Menu />
					{/* Sticky-menu */}
					<StickyMenu
						burgerChange={burgerChange}
						setburgerChange={setburgerChange}
					/>
					{/* Navigation */}
					<div className="content">
						<Switch>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/work/:id">
								<Work />
							</Route>
							<Route path="/">
								<Works />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
