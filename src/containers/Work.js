import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// slider
import Carousel from "nuka-carousel";
// autre slider
import SlideShow from "react-image-show";

const Work = () => {
	// onr récupère l'id dans le query
	const { id } = useParams();

	const [work, setWork] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	// slider

	// // //

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
	const urlArray = [
		"https://res.cloudinary.com/nicolas-caux/image/upload/v1613944343/vbccc9mpj6y3jknsy3kb.jpg",
		"https://res.cloudinary.com/nicolas-caux/image/upload/v1613944344/fyw28ae2clbqny6jogup.jpg",
	];

	return (
		<div className="content-work">
			{isLoading === true ? (
				<>
					{/*  */}
					{/* <Carousel
						autoplay={true}
						transitionMode="fade"
						defaultControlsConfig={{
							prevButtonText: "<",
							nextButtonText: ">",
							prevButtonClassName: "btn-prev-slider",
							nextButtonClassName: "btn-next-slider",
						}}
						initialSlideHeight={10}
					>
						{work.content.slider.map((slide, index) => {
							return (
								<div key={index}>
									<img src={slide.secure_url} />
								</div>
							);
						})}
					</Carousel> */}
					<SlideShow
						images={urlArray}
						width="1200px"
						imagesWidth="100%"
						imagesHeight="450px"
						imagesHeightMobile="56vw"
						//thumbnailsWidth="920px"
						//thumbnailsHeight="12vw"
						indicators
						//thumbnails
						fixedImagesHeight
						//arrows
					/>

					{/*  */}

					<div className="description">
						<h1>{work.content.title}</h1>
						<p>{work.content.description}</p>
					</div>
				</>
			) : (
				<div>Chargement en cours ...</div>
			)}
		</div>
	);
};

export default Work;
