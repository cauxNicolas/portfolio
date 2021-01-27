import React, { useState } from "react";
// Components
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const Contact = () => {
	// Un état d'objet pour chaque input
	const [valueInput, setValueInput] = useState({
		name: "",
		lastname: "",
		email: "",
		textarea: "",
	});

	// fonction qui récupère chaque valeur des inputs grace au Name
	const handleChangeInput = (event) => {
		setValueInput({
			...valueInput,
			[event.target.name]: event.target.value,
		});
		console.log("---->", event.target);
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
							<Input
								label="Nom"
								placeholder="Nom"
								name="name"
								type="text"
								value={valueInput.name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="input-flex">
							<Input
								label="Prénom"
								placeholder="Prénom"
								name="lastname"
								type="text"
								value={valueInput.lastname}
								onChange={handleChangeInput}
							/>
						</div>
					</div>
					<Input
						label="Email"
						placeholder="Email"
						name="email"
						type="email"
						value={valueInput.email}
						onChange={handleChangeInput}
					/>
					<Textarea
						label="Votre projet"
						placeholder="Décrivez - moi votre projet en quelques lignes ..."
						name="textarea"
						rows={5}
						value={valueInput.textarea}
						onChange={handleChangeInput}
					/>
					<Input type="submit" />
				</form>
			</div>
		</>
	);
};

export default Contact;
