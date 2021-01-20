import React, { useState } from "react";

const BurgerMenu = () => {
	const [burgerChange, setburgerChange] = useState(true);

	const burgerMenuChange = () => {
		setburgerChange(!burgerChange);
	};

	return (
		<div
			className={
				burgerChange === true
					? "container-burger"
					: "container-burger change"
			}
			onClick={burgerMenuChange}
		>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</div>
	);
};

export default BurgerMenu;
