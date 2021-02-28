import Illus from "../img/illustrator.svg";
import Photoshop from "../img/photoshop.svg";
import Indesign from "../img/indesign.svg";
import After from "../img/afterEffect.svg";
import Html from "../img/html.svg";
import Css from "../img/css.svg";
import Javascript from "../img/javascript.svg";
import Bootstrap from "../img/bootstrap.svg";
import Wordpress from "../img/wordpress.svg";
import React from "../img/react.svg";
import Heroku from "../img/heroku.svg";
import NodeJs from "../img/nodeJs.svg";
import Git from "../img/git.svg";
import GitHub from "../img/gitHub.svg";
import Stripe from "../img/stripe.svg";
import Cloudinary from "../img/cloudinary.svg";
//import Express from "../img/express.svg";
//import Axios from "../img/axios.svg";
import MongoDB from "../img/mongoDB.svg";

const showSkills = (skill) => {
	switch (skill) {
		case "Illustrator":
			return (
				<>
					<img src={Illus} alt="logo illustrator" />
				</>
			);
		case "Photoshop":
			return (
				<>
					<img src={Photoshop} alt="logo photoshop" />
				</>
			);
		case "Indesign":
			return (
				<>
					<img src={Indesign} alt="logo indesign" />
				</>
			);
		case "After Effect":
			return (
				<>
					<img src={After} alt="logo after effect" />
				</>
			);
		case "Html 5":
			return (
				<>
					<img src={Html} alt="logo html" />
				</>
			);
		case "Css 3":
			return (
				<>
					<img src={Css} alt="logo css" />
				</>
			);
		case "Javascript":
			return (
				<>
					<img src={Javascript} alt="logo javascript" />
				</>
			);
		case "Bootstrap":
			return (
				<>
					<img src={Bootstrap} alt="logo bootstrap" />
				</>
			);
		case "WordPress":
			return (
				<>
					<img src={Wordpress} alt="logo wordpress" />
				</>
			);
		case "React Js":
			return (
				<>
					<img src={React} alt="logo react" />
				</>
			);
		case "React Native":
			return (
				<>
					<img src={React} alt="logo rect" />
				</>
			);
		case "Heroku":
			return (
				<>
					<img src={Heroku} alt="logo heroku" />
				</>
			);
		case "Node Js":
			return (
				<>
					<img src={NodeJs} alt="logo nodes js" />
				</>
			);
		case "Git":
			return (
				<>
					<img src={Git} alt="logo git" />
				</>
			);
		case "GitHub":
			return (
				<>
					<img src={GitHub} alt="logo github" />
				</>
			);
		case "Stripe":
			return (
				<>
					<img src={Stripe} alt="logo stripe" />
				</>
			);
		case "Cloudinary":
			return (
				<>
					<img src={Cloudinary} alt="logo cloudinary" />
				</>
			);
		/* case "Express":
			return (
				<>
					<img src={Express} alt="logo express" />
				</>
			);
		case "Axios":
			return (
				<>
					<img src={Axios} alt="logo axios" />
				</>
			); */
		case "MongoDB":
			return (
				<>
					<img src={MongoDB} alt="logo mongoDB" />
				</>
			);
		default:
			return (
				<>
					<img src={MongoDB} alt="logo mongoDB" />
				</>
			);
	}
};

export default showSkills;
