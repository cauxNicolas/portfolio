import React from "react";

const BurgerMenu = ({ burgerChange, setburgerChange }) => {
	const burgerMenuChange = () => {
		setburgerChange(!burgerChange);
	};

	return (
		<div
			/* 			className={
				burgerChange === true
					? "container-burger"
					: "container-burger change"
			} */
			className={`container-burger ${!burgerChange && "change"}`} /* Mo */
			onClick={burgerMenuChange}
		>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</div>
	);
};

export default BurgerMenu;
