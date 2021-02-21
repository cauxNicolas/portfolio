import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Works = ({ works, isLoading }) => {
	console.log(works);
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
									{works.map((work, index) => {
										return (
											<div id="masonry-grid" key={index}>
												<Link
													to={
														"/work/" +
														work.content._id
													}
												>
													<img
														src={
															work.cover
																.secure_url
														}
														style={{
															width: "100%",
															display: "block",
														}}
													/>
												</Link>
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
