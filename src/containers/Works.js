import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

const Works = () => {
	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get(process.env.REACT_APP_GET);
			console.log(data);
		};
		fetchData();
		setIsLoading(true);
	}, []);

	const [isLoading, setIsLoading] = useState(false);

	const api = [];
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
									{api.map((work, index) => {
										return (
											<Link
												to={`/work/${work.project._id}`}
											>
												<div
													id="masonry-grid"
													key={index}
												>
													<img
														src={work.picture}
														style={{
															width: "100%",
															display: "block",
														}}
														alt={work.picture}
													/>
												</div>
											</Link>
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
