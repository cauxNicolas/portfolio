import React from "react";

const Contact = () => {
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

				<form>
					<div className="d-flex space-between">
						<div className="input-flex">
							<label>Nom</label>
							<input placeholder="Nom" type="text" />
						</div>
						<div className="input-flex">
							<label>Prénom</label>
							<input placeholder="Prénom" type="text" />
						</div>
					</div>
					<label>Email</label>
					<input placeholder="Email" type="text" />
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
