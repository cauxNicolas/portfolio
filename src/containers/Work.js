import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import showSkills from "../function/showSkills";

// autre slider
import SlideShow from "react-image-show";

// img
import Left from "../img/left.svg";
import Right from "../img/right.svg";

const Work = ({ works }) => {
	// onr récupère l'id dans le query
	const { id } = useParams();
	const [work, setWork] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://portfolio-client-nicaux.herokuapp.com" + `/work/${id}`
			);
			setWork(response.data);
			setIsLoading(true);
		};
		fetchData();
	}, [id]);

	const urlArray = [];
	if (isLoading === true) {
		for (let i = 0; i < work.content.slider.length; i++) {
			urlArray.push(work.content.slider[i].secure_url);
		}
	}

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
								<img src={Left} alt="fleche de gauche" />
							</Link>
						) : (
							<div></div>
						)}

						{indexId < tabWork.length - 1 ? (
							<Link to={"/work/" + tabWork[indexId + 1]}>
								<img src={Right} alt="fleche de droite" />
							</Link>
						) : (
							<div></div>
						)}
					</div>
					<div className="work-slider">
						<SlideShow
							images={urlArray}
							width="1200px"
							imagesWidth="100%"
							imagesHeight="450px"
							imagesHeightMobile="56vw"
							indicators
							thumbnails={false}
							fixedImagesHeight={true}
							arrows={false}
						/>
					</div>
					<div className="width-skill-desc">
						<div className="description">
							<h1>{work.content.title}</h1>
							<p className="desc-textarea">
								{work.content.description}
							</p>
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
							<Link to={"/work/" + tabWork[indexId - 1]}>
								<img src={Left} alt="fleche de gauche" />
								<p>Précédent</p>
							</Link>
						) : (
							<div></div>
						)}

						{indexId < tabWork.length - 1 ? (
							<Link to={"/work/" + tabWork[indexId + 1]}>
								<p>Suivant</p>
								<img src={Right} alt="fleche de droite" />
							</Link>
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
