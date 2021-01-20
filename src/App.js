import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import About from "./containers/About";
import Works from "./containers/Works";
import Contact from "./containers/Contact";
// Image
import Logo from "./img/nicaux.svg";

function App() {
	return (
		<Router>
			<div className="container">
				<div className="menu">
					<a href="/">
						<img src={Logo} alt="logo nicolas caux" />
					</a>
					<nav>
						<ul>
							<li>
								<Link to="/">About</Link>
							</li>
							<li>
								<Link to="/works">Works</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="content">
					<Switch>
						<Route path="/works">
							<Works />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/">
							<About />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
