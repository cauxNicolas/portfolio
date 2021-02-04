import React, { useState } from "react";
// Bdd
import axios from "axios";
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
	// Envoi serveur OK
	const [validForm, setValidForm] = useState("");
	// Erreur email
	const [validEmail, setvalidEmail] = useState("");
	// Error
	const [errorName, setErrorName] = useState(false);
	const [errorlastname, setErrorLastname] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorTextarea, setErrorTextarea] = useState(false);

	// fonction qui récupère chaque valeur des inputs grace au Name
	const handleChangeInput = (event) => {
		setValueInput({
			...valueInput,
			[event.target.name]: event.target.value,
		});
	};

	// disparition des erreurs lors de la soumission réussie
	const errorValidate = () => {
		setErrorName(false);
		setErrorLastname(false);
		setErrorEmail(false);
		setErrorTextarea(false);
		setvalidEmail("");
	};

	// vider les inputs
	const valueEmpty = () => {
		setValueInput({
			name: "",
			lastname: "",
			email: "",
			textarea: "",
		});
	};

	// Soumission du formulaire
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			valueInput.name !== "" &&
			valueInput.lastname !== "" &&
			valueInput.email !== "" &&
			valueInput.textarea !== ""
		) {
			try {
				const response = await axios.post(
					process.env.REACT_APP_SEND_FORM,
					{
						name: valueInput.name,
						lastname: valueInput.lastname,
						email: valueInput.email,
						textarea: valueInput.textarea,
					}
				);
				errorValidate();
				valueEmpty();
				setValidForm(response.data);
				setTimeout(() => {
					setValidForm("");
				}, 3000);
			} catch (error) {
				setvalidEmail(error.response.data.message);
			}
		} else {
			if (valueInput.name === "") {
				setErrorName(true);
			}
			if (valueInput.lastname === "") {
				setErrorLastname(true);
			}
			if (valueInput.email === "") {
				setErrorEmail(true);
			}
			if (valueInput.textarea === "") {
				setErrorTextarea(true);
			}
		}
	};

	/*----------*\
		JSX 
	\*----------*/

	return (
		<>
			<div id="formulaire" className="effect">
				<h1>Un projet à réaliser ?</h1>
				<p className="mb-2">
					Vous souhaitez réaliser une webApp ou une application mobile
					? Réaliser un parcours design UI UX ? Refonte d'une charte ?
					Décrivez-le en quelques lignes. Je vous répondrai.
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
								className={
									errorName === true ? "error-form" : null
								}
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
								className={
									errorlastname === true ? "error-form" : null
								}
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
						className={errorEmail === true ? "error-form" : null}
					/>
					<Textarea
						label="Votre projet"
						placeholder="Décrivez - moi votre projet en quelques lignes ..."
						name="textarea"
						rows={5}
						value={valueInput.textarea}
						onChange={handleChangeInput}
						className={errorTextarea === true ? "error-form" : null}
					/>
					<Input type="submit" />
				</form>
				{validForm !== "" ? (
					<div className="validate-form">
						<p>{validForm}</p>
					</div>
				) : null}
				{validEmail !== "" ? (
					<div className="error-form-info">
						<p>{validEmail}</p>
					</div>
				) : null}
				{errorName === true ||
				errorlastname === true ||
				errorEmail === true ||
				errorTextarea === true ? (
					<div className="error-form-info">
						<p>Merci de remplir tous les champs</p>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Contact;
