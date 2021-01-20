import React from "react";

const Contact = () => {
	return (
		<>
			<div id="formulaire" className="effect">
				<h1>Un projet à réaliser ?</h1>
				<p className="mb-2">
					Vous souhaitez développer une idée ? réaliser un parcours
					design UI UX ? ou tout simplement refaire le branding d'une
					charte ? N'hesitez pas à remplir le formulaire. Je vous
					répondrai
				</p>
				<form>
					<div className="d-flex space-between">
						<div className="input-flex">
							<label>Nom</label>
							<input placeholder="Nom" />
						</div>
						<div className="input-flex">
							<label>Prénom</label>
							<input placeholder="Prénom" />
						</div>
					</div>
					<label>Email</label>
					<input placeholder="Email" />
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
