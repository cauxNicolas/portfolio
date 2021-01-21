import React from "react";
// Navigation
import { Link } from "react-router-dom";

const StickyMenu = ({ burgerChange }) => {
	return (
		<div
			className={
				burgerChange === false
					? "sticky-menu-content"
					: "sticky-invisible"
			}
		>
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

export default StickyMenu;
