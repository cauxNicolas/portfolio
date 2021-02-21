import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

const Works = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [works, setWorks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(process.env.REACT_APP_GET);
			setWorks(response.data);
		};
		fetchData();
		setIsLoading(true);
	}, []);

	const newTab = [];
	for (let i = 0; i < works.length; i++) {
		newTab.push(works[i].cover.secure_url);
	}
	console.log(newTab);
	return (
		<div>
			{isLoading === true ? (
				<div id="works">
					<div className="content-works">
						<div className="preview-works">
							<ResponsiveMasonry
								columnsCountBreakPoints={{
									350: 1,
									750: 2,
									900: 3,
									1200: 4,
								}}
							>
								<Masonry>
									{newTab.map((tab, index) => {
										return (
											<div id="masonry-grid" key={index}>
												<img
													src={tab}
													style={{
														width: "100%",
														display: "block",
													}}
												/>
											</div>
										);
									})}
								</Masonry>
							</ResponsiveMasonry>
						</div>
					</div>
				</div>
			) : (
				<div>chargement en cours...</div>
			)}
		</div>
	);
};

export default Works;
