import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AddWorks = () => {
	const [tokenExist, setTokenExist] = useState(false);
	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			setTokenExist(true);
		}
	}, []);

	return (
		<div>
			{tokenExist === true ? (
				<div>AddWorks</div>
			) : (
				<a href="http://localhost:3000/">got to home</a>
			)}
		</div>
	);
};

export default AddWorks;
