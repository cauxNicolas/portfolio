import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// autre slider
import SlideShow from "react-image-show";

const Work = () => {
	// onr récupère l'id dans le query
	const { id } = useParams();

	const [work, setWork] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	console.log(work);

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

	//console.log(work.content.slider);
	const urlArray = [];

	if (isLoading === true) {
		for (let i = 0; i < work.content.slider.length; i++) {
			urlArray.push(work.content.slider[i].secure_url);
		}
	}

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
							//thumbnailsWidth="920px"
							//thumbnailsHeight="12vw"
							indicators
							thumbnails={false}
							fixedImagesHeight={true}
							arrows={false}
						/>
					</div>
					<div className="description">
						<h1>{work.content.title}</h1>
						<p className="desc-textarea">
							{work.content.description}
						</p>
					</div>
				</>
			) : (
				<div>Chargement en cours ...</div>
			)}
		</div>
	);
};

export default Work;
