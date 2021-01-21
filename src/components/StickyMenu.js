import React from "react";
// Navigation
import { Link } from "react-router-dom";

const StickyMenu = ({ burgerChange, setburgerChange }) => {
	const closeMenu = () => {
		setburgerChange(true);
	};
	return (
		<>
			<div
				className={
					burgerChange === false
						? "sticky-menu-content"
						: "sticky-invisible"
				}
				/* onClick={closeMenu} */
			>
				<div className="invisible-close" onClick={closeMenu}></div>
				<nav>
					<ul>
						<li onClick={closeMenu}>
							<Link to="/">Works</Link>
						</li>
						<li onClick={closeMenu}>
							<Link to="/about">About</Link>
						</li>
						<li onClick={closeMenu}>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default StickyMenu;
