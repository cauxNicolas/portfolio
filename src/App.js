import React, { useState } from "react";
import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import About from "./containers/About";
import Works from "./containers/Works";
import Contact from "./containers/Contact";
// Image
import LogoSticky from "./img/nicaux-sticky.svg";
// Components
import BurgerMenu from "./components/BurgerMenu";
import Menu from "./components/Menu";
import StickyMenu from "./components/StickyMenu";

function App() {
	const [burgerChange, setburgerChange] = useState(true);

	return (
		<Router>
			<div className="container">
				<Menu />
				{/* sticky-menu */}
				<div className="sticky-menu">
					<div>
						<a href="/">
							<img src={LogoSticky} alt="logo nicolas caux" />
						</a>
					</div>
					<div id="burger">
						<BurgerMenu
							burgerChange={burgerChange}
							setburgerChange={setburgerChange}
						/>
					</div>
				</div>
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
				<StickyMenu burgerChange={burgerChange} />
			</div>
		</Router>
	);
}

export default App;
