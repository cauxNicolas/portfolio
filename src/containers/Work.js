import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import showSkills from "../function/showSkills";

// autre slider
import SimpleImageSlider from "react-simple-image-slider";
// img
import Left from "../img/left.svg";
import Right from "../img/right.svg";

const Work = ({ works }) => {
	// onr récupère l'id dans le query
	const { id } = useParams();
	const [work, setWork] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [newUrl, setNewUrl] = useState([]);
	let urlArray = [];

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://portfolio-back-phi.vercel.app" + `/work/${id}`
			);
			setWork(response.data);
			setIsLoading(true);
		};
		fetchData();
	}, [id]);

	if (isLoading === true) {
		for (let i = 0; i < work.content.slider.length; i++) {
			urlArray.push({ url: work.content.slider[i].secure_url });
		}
	}

	const clickArrow = () => {
		// merci Mo
		setIsLoading(false);
	};

	// deplacement work by work
	// on recupere les id dans un tableau
	const tabWork = [];
	for (let i = 0; i < works.length; i++) {
		tabWork.push(works[i]._id);
	}
	// on recupere l'index de l'id de la page dans le tableau
	const indexId = tabWork.indexOf(id);

	return (
		<div className="content-work">
			{isLoading === true ? (
				<>
					<div className="arrow-work">
						{indexId > 0 ? (
							<Link to={"/work/" + tabWork[indexId - 1]}>
								<div onClick={clickArrow}>
									<img src={Left} alt="fleche de gauche" />
								</div>
							</Link>
						) : (
							<div></div>
						)}

						{indexId < tabWork.length - 1 ? (
							<Link to={"/work/" + tabWork[indexId + 1]}>
								<div onClick={clickArrow}>
									<img src={Right} alt="fleche de droite" />
								</div>
							</Link>
						) : (
							<div></div>
						)}
					</div>
					<div>
						{/*  */}
						<SimpleImageSlider
							width={896}
							height={504}
							images={urlArray}
							slideDuration={0.5}
							showBullets={true}
						></SimpleImageSlider>
						{/*  */}
					</div>
					<div className="width-skill-desc">
						<div className="description">
							<h1>{work.content.title}</h1>
							<p className="desc-textarea">{work.content.description}</p>
						</div>
						<div className="skills">
							{work.content.skills.map((skill, index) => {
								return (
									<div className="skill-svg" key={index}>
										{showSkills(skill)}
										<p>{skill}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="arrow-work-mobile d-flex">
						{indexId > 0 ? (
							<div onClick={clickArrow}>
								<Link to={"/work/" + tabWork[indexId - 1]}>
									<img src={Left} alt="fleche de gauche" />
									<p>Précédent</p>
								</Link>
							</div>
						) : (
							<div></div>
						)}

						{indexId < tabWork.length - 1 ? (
							<div onClick={clickArrow}>
								<Link to={"/work/" + tabWork[indexId + 1]}>
									<p>Suivant</p>
									<img src={Right} alt="fleche de droite" />
								</Link>
							</div>
						) : (
							<div></div>
						)}
					</div>
				</>
			) : (
				<div>Chargement en cours ...</div>
			)}
		</div>
	);
};

export default Work;
