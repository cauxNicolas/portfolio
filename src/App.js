import React, { useState } from "react";
import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import About from "./containers/About";
import Works from "./containers/Works";
import Contact from "./containers/Contact";

// Components
import Menu from "./components/Menu";
import StickyMenu from "./components/StickyMenu";

function App() {
	const [burgerChange, setburgerChange] = useState(true);

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
						<Route path="/">
							<Works />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
