import React from "react";
// Navigation
import { Link } from "react-router-dom";
// Components
import BurgerMenu from "./BurgerMenu";
// Image
import LogoSticky from "../img/nicaux-sticky.svg";

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
		</>
	);
};

export default StickyMenu;
