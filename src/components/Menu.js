import React from "react";
// Navigation
import { Link, useLocation } from "react-router-dom";
// image
import Logo from "../img/nicaux.svg";

const Menu = () => {
	const location = useLocation();
	const { pathname } = location;
	console.log(pathname);
	return (
		<div className="menu">
			<a href="/">
				<img src={Logo} alt="logo nicolas caux" />
			</a>
			<nav>
				<ul>
					<li className={pathname === "/" ? "colorMenu" : ""}>
						<Link to="/">Works</Link>
					</li>
					<li className={pathname === "/about" ? "colorMenu" : ""}>
						<Link to="/about">About</Link>
					</li>
					<li className={pathname === "/contact" ? "colorMenu" : ""}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<div className="copyright">
				<p>&copy; {new Date().getFullYear()} build by nicaux</p>
				<p>React Js</p>
			</div>
		</div>
	);
};

export default Menu;
