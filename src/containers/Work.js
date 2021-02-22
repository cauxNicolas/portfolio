import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// slider
import Carousel from "nuka-carousel";

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

	return (
		<div className="content-work">
			{isLoading === true ? (
				<>
					{/*  */}
					<Carousel
						autoplay={true}
						transitionMode="fade"
						defaultControlsConfig={{
							prevButtonText: "<",
							nextButtonText: ">",
							prevButtonClassName: "btn-prev-slider",
							nextButtonClassName: "btn-next-slider",
						}}
					>
						{work.content.slider.map((slide, index) => {
							return (
								<div key={index}>
									<img src={slide.secure_url} />
								</div>
							);
						})}
					</Carousel>
					{/*  */}

					<div>
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
