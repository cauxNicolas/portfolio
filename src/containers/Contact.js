import React, { useState } from "react";

const Contact = () => {
	const [name, setname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setemail] = useState("");

	const handleChangeName = (event) => {
		setname(event.target.value);
	};

	const handleChangeLastname = (event) => {
		setlastname(event.target.value);
	};

	const handleChangeEmail = (event) => {
		setemail(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<div id="formulaire" className="effect">
				<h1>Un projet à réaliser ?</h1>
				<p className="mb-2">
					Vous souhaitez réaliser un projet webApp ou une application
					mobile ? Réaliser un parcours design UI UX ? Refonte d'une
					charte ? N'hesitez pas à remplir le formulaire. Je vous
					répondrai.
				</p>

				<form onSubmit={handleSubmit}>
					<div className="d-flex space-between">
						<div className="input-flex">
							<label>Nom</label>
							<input
								placeholder="Nom"
								type="text"
								value={name}
								onChange={handleChangeName}
							/>
						</div>
						<div className="input-flex">
							<label>Prénom</label>
							<input
								placeholder="Prénom"
								type="text"
								value={lastname}
								onChange={handleChangeLastname}
							/>
						</div>
					</div>
					<label>Email</label>
					<input
						placeholder="Email"
						type="email"
						value={email}
						onChange={handleChangeEmail}
					/>
					<label>Votre projet</label>
					<textarea
						rows="5"
						placeholder="Décrivez - moi votre projet en quelques lignes ..."
					/>
					<input type="submit" />
				</form>
			</div>
		</>
	);
};

export default Contact;
