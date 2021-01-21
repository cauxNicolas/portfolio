import React from "react";
// Navigation
import { Link } from "react-router-dom";
// image
import Logo from "../img/nicaux.svg";

const Menu = () => {
	return (
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
	);
};

export default Menu;
