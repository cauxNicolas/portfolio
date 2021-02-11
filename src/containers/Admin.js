import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Admin = () => {
	const [admin, setAdmin] = useState({ passOne: "", passTwo: "" });
	const history = useHistory();

	const valueConnect = (event) => {
		setAdmin({ ...admin, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (admin.passOne !== "" && admin.passTwo !== "") {
			try {
				const response = await axios.post(process.env.REACT_APP_ADMIN, {
					passOne: admin.passOne,
					passTwo: admin.passTwo,
				});
				Cookies.set("token", response.data.token);
				history.push("/add-works");
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	return (
		<div id="admin" className="content">
			<form onSubmit={handleSubmit}>
				<h2>Connexion</h2>
				<input
					type="password"
					name="passOne"
					value={admin.passOne}
					onChange={valueConnect}
				/>
				<input
					type="password"
					name="passTwo"
					value={admin.passTwo}
					onChange={valueConnect}
				/>
				<input type="submit" value="Valider" />
			</form>
		</div>
	);
};

export default Admin;
