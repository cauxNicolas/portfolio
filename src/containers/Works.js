import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Works = () => {
	const api = [
		{
			_id: 1,
			picture:
				"https://t3.ftcdn.net/jpg/02/84/69/52/360_F_284695228_Mk8bgUjv33bT1opqAu4fVAGftgbxUiqg.jpg",
			project: {
				_id: 11111,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 2,
			picture:
				"https://fsb.zobj.net/crop.php?r=FwGS23w8lLztxQFvlhnXfkr00Ff6W-YSUsmESIG1xYBDOL3CY6oQbLj04UFNoO7qlHdVlNBnHGvlYS9Oor9JK0yDqZLPD5KuWX2iezA5RUjEUu4L0R4D3A9c2xC1pE1hl5kkMcWUzsZUoGwD",
			project: {
				_id: 22222,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 3,
			picture:
				"https://downloadwap.com/thumbs2/wallpapers/p2/2019/misc/44/e56cbd5113364924.jpg",
			project: {
				_id: 33333,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 4,
			picture: "https://data.whicdn.com/images/335824972/original.jpg",
			project: {
				_id: 44444,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 5,
			picture:
				"https://images-eu.ssl-images-amazon.com/images/I/81YDuTWSHyL.png",
			project: {
				_id: 55555,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 6,
			picture:
				"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
			project: {
				_id: 66666,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 7,
			picture:
				"https://www.xerox.com/sites/default/files/wallpaper_sunset_600x600.jpg",
			project: {
				_id: 77777,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 8,
			picture:
				"https://i0.wp.com/www.blablahightech.fr/wp-content/uploads/2015/03/Minimal-Aircrafts-Wallpaper-1024x576.jpg?resize=658%2C370",
			project: {
				_id: 88888,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
		{
			_id: 9,
			picture:
				"https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
			project: {
				_id: 99999,
				works: [
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
					"http://slider_1.jpg",
				],
				skills: [
					{
						title: "Skills",
						skills_img: ["http://skill.jpg", "http://skill.jpg"],
					},
				],
				about: {
					title: "Project",
					description: "lorem ipsum",
				},
			},
		},
	];

	return (
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
									<Link to={`/work/${work.project._id}`}>
										<div id="masonry-grid" key={index}>
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
	);
};

export default Works;
