import "./App.css";
// Navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import About from "./containers/About";
import Works from "./containers/Works";
import Contact from "./containers/Contact";
// Image
import Logo from "./img/nicaux.svg";
import LogoSticky from "./img/nicaux-sticky.svg";
// Components
import BurgerMenu from "./components/BurgerMenu";

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
								<Link to="/">Works</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				{/* sticky-menu */}
				<div className="sticky-menu">
					<div>
						<a href="/">
							<img src={LogoSticky} alt="logo nicolas caux" />
						</a>
					</div>
					<div id="burger">
						<BurgerMenu />
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
			</div>
		</Router>
	);
}

export default App;
