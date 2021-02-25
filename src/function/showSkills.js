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
					<img src={Illus} />
				</>
			);
		case "Photoshop":
			return (
				<>
					<img src={Photoshop} />
				</>
			);
		case "Indesign":
			return (
				<>
					<img src={Indesign} />
				</>
			);
		case "After Effect":
			return (
				<>
					<img src={After} />
				</>
			);
		case "Html 5":
			return (
				<>
					<img src={Html} />
				</>
			);
		case "Css 3":
			return (
				<>
					<img src={Css} />
				</>
			);
		case "Javascript":
			return (
				<>
					<img src={Javascript} />
				</>
			);
		case "Bootstrap":
			return (
				<>
					<img src={Bootstrap} />
				</>
			);
		case "WordPress":
			return (
				<>
					<img src={Wordpress} />
				</>
			);
		case "React Js":
			return (
				<>
					<img src={React} />
				</>
			);
		case "React Native":
			return (
				<>
					<img src={React} />
				</>
			);
		case "Heroku":
			return (
				<>
					<img src={Heroku} />
				</>
			);
		case "Node Js":
			return (
				<>
					<img src={NodeJs} />
				</>
			);
		case "Git":
			return (
				<>
					<img src={Git} />
				</>
			);
		case "GitHub":
			return (
				<>
					<img src={GitHub} />
				</>
			);
		case "Stripe":
			return (
				<>
					<img src={Stripe} />
				</>
			);
		case "Cloudinary":
			return (
				<>
					<img src={Cloudinary} />
				</>
			);
		/* case "Express":
			return (
				<>
					<img src={Express} />
				</>
			);
		case "Axios":
			return (
				<>
					<img src={Axios} />
				</>
			); */
		case "MongoDB":
			return (
				<>
					<img src={MongoDB} />
				</>
			);
	}
};

export default showSkills;
