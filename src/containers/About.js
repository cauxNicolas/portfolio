import React from "react";
import github from "../img/gitHub.svg";
import Linkedin from "../img/linkedin.svg";
import Youtube from "../img/youtube.svg";

const About = () => {
	const wf3 =
		"https://www.wf3.fr/formation/formation-developpeur-web-et-web-mobile/?key=formation%20developpement%20web";

	const reacteur = "https://www.lereacteur.io/";

	return (
		<div className="content">
			<div id="about">
				<h1>About me</h1>
				<p>Hello Workers, et bienvenue sur mon site !</p>
				<p>
					Pour me présenter en quelques lignes, je m'appelle
					<span> Nicolas Caux</span> et avant j'étais
					<span> Graphic Designer UI UX</span>, diplômé d'écoles
					d'Arts sur Paris. je réalisais tout le <span> design</span>{" "}
					d'une entreprise.
				</p>
				<br />
				<p>
					Une opportunité s'offre à moi en 2015, la réalisation des
					sites internet pour particuliers via le framework
					<span> WordPress</span>. Je découvre l'intégration
					<span> Html</span> et<span> Css</span>.
				</p>
				<p>
					Dès lors, je ne peux en rester là. Je veux connaître ce qui
					se cache sous la surface des sites pour maîtriser chaque bug
					éventuel, et réaliser des sites sûr-mesure.
				</p>
				<br />
				<p>
					C'est décidé, je vais devenir<span> Développeur</span> !
				</p>
				<br />
				<p>
					Je commence par un bootcamp dont j'ai été certifié en 2018 :
					<span>
						{" "}
						<a href={wf3} target="_blank">
							WebForce 3
						</a>
					</span>{" "}
					où j'apprends à développer des sites <span>Php</span>,{" "}
					<span>Symfony</span> etc...
				</p>
				<br />
				<p>
					L'apprentissage du<span> Javascript</span> a été un
					véritable déclic et en 2020, je recommence un autre bootcamp
					dont j'ai encore été certifié :{" "}
					<span>
						<a href={reacteur} target="_blank">
							{" "}
							Le Reacteur
						</a>
					</span>
					. J'apprends à développer des applications mobiles et des
					sites webApp avec <span>React Native</span> et{" "}
					<span>React Js</span>, ainsi qu'à maîtriser le
					<span> Frontend</span> et le <span> Backend</span>.
				</p>
				<br />
				<p>
					Aujourd'hui, je suis <span>Developpeur Fullstack Js</span>{" "}
					et <span> Designer UI UX</span>. Pour faire court, je suis
					un développeur créatif.
				</p>
				<p>Je design votre projet et je le développe !</p>
				<br />
				<br />
				<p>Si vous êtes curieux, voici quelques liens :</p>
				<div className="link-about">
					<div>
						<a
							href="https://www.linkedin.com/in/nicolas-caux-developpeur-fullstack-react-react-native-ui-ux-designer/"
							target="_blank"
						>
							<img src={Linkedin} alt="logo github" />
							<p>Linkedin</p>
						</a>
					</div>
					<div>
						<a
							href="https://github.com/cauxNicolas"
							target="_blank"
						>
							<img src={github} alt="logo github" />
							<p>GitHub</p>
						</a>
					</div>
					<div>
						<a href="https://youtu.be/9z7BWzQ1JhI" target="_blank">
							<img src={Youtube} alt="logo github" />
							<p>Youtube</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
