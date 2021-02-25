import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import showSkills from "../function/showSkills";

// autre slider
import SlideShow from "react-image-show";

const Work = () => {
	// onr récupère l'id dans le query
	const { id } = useParams();

	const [work, setWork] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				process.env.REACT_APP_GET_LOCAL + `/work/${id}`
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
	console.log(work);
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
				</>
			) : (
				<div>Chargement en cours ...</div>
			)}
		</div>
	);
};

export default Work;
