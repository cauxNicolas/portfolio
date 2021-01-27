import React, { useState } from "react";

const Contact = () => {
	// Un useState pour chaque inout
	const [valueInput, setValueInput] = useState({
		name: "",
		lastname: "",
		email: "",
		textarea: "",
	});

	// fonction qui récupère chaque input grace au Name
	const handleChangeInput = (event) => {
		setValueInput({
			...valueInput,
			[event.target.name]: event.target.value,
		});
	};

	// Soumission du formulaire
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	console.log(valueInput);
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
								name="name"
								type="text"
								value={valueInput.name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="input-flex">
							<label>Prénom</label>
							<input
								placeholder="Prénom"
								name="lastname"
								type="text"
								value={valueInput.lastname}
								onChange={handleChangeInput}
							/>
						</div>
					</div>
					<label>Email</label>
					<input
						placeholder="Email"
						name="email"
						type="email"
						value={valueInput.email}
						onChange={handleChangeInput}
					/>
					<label>Votre projet</label>
					<textarea
						rows="5"
						name="textarea"
						placeholder="Décrivez - moi votre projet en quelques lignes ..."
						value={valueInput.textarea}
						onChange={handleChangeInput}
					/>
					<input type="submit" />
				</form>
			</div>
		</>
	);
};

export default Contact;
