import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import showSkills from "../function/showSkills";

// autre slider
import SlideShow from "react-image-show";

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

	// on recupere les id dans un tableau
	const tabWork = [];
	for (let i = 0; i < works.length; i++) {
		tabWork.push(works[i]._id);
	}
	// on recupere l'index de l'id de la page dans le tableau
	const indexId = tabWork.indexOf(id);

	console.log(indexId);
	return (
		<div className="content-work">
			{isLoading === true ? (
				<>
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
					<div className="d-flex width-skill-desc">
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
						<div className="description">
							<h1>{work.content.title}</h1>
							<p className="desc-textarea">
								{work.content.description}
							</p>
						</div>
					</div>
					<div
						className="d-flex"
						style={{
							width: "100%",
							justifyContent: "space-around",
						}}
					>
						<Link to={"/work/" + tabWork[indexId - 1]}>{"<-"}</Link>

						<Link to={"/work/" + tabWork[indexId + 1]}>{"->"}</Link>
					</div>
				</>
			) : (
				<div>Chargement en cours ...</div>
			)}
		</div>
	);
};

export default Work;
