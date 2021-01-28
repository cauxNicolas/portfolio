import React from "react";
import Gallery from "../components/Gallery";

const Works = () => {
	return (
		<div id="works">
			<div className="content-works">
				{/* <nav>
					<div>
						<a>All</a>
					</div>
					<div>
						<a>Dev</a>
					</div>
					<div>
						<a>Design</a>
					</div>
					<div>
						<a>Branding</a>
					</div>
					<div>
						<a>Video</a>
					</div>
				</nav> */}
				<div className="preview-works">
					<Gallery />
				</div>
			</div>
		</div>
	);
};

export default Works;
