import React, { useState, useEffect } from "react";
import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import About from "./containers/About";
import Contact from "./containers/Contact";
import Work from "./containers/Work";
import Works from "./containers/Works";

// Components
import Menu from "./components/Menu";
import StickyMenu from "./components/StickyMenu";

// acces bdd
import axios from "axios";

function App() {
	const [burgerChange, setburgerChange] = useState(true);
	const [works, setWorks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://portfolio-back-phi.vercel.app/"
			);
			setWorks(response.data);
		};
		fetchData();
		setIsLoading(true);
	}, []);

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
				<div className="content-general">
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/work/:id">
							<Work works={works} />
						</Route>
						<Route path="/">
							<Works works={works} isLoading={isLoading} />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
