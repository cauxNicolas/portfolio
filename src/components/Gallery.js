import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
	const images = [
		"https://t3.ftcdn.net/jpg/02/84/69/52/360_F_284695228_Mk8bgUjv33bT1opqAu4fVAGftgbxUiqg.jpg",
		"https://fsb.zobj.net/crop.php?r=FwGS23w8lLztxQFvlhnXfkr00Ff6W-YSUsmESIG1xYBDOL3CY6oQbLj04UFNoO7qlHdVlNBnHGvlYS9Oor9JK0yDqZLPD5KuWX2iezA5RUjEUu4L0R4D3A9c2xC1pE1hl5kkMcWUzsZUoGwD",
		"https://downloadwap.com/thumbs2/wallpapers/p2/2019/misc/44/e56cbd5113364924.jpg",
		"https://data.whicdn.com/images/335824972/original.jpg",
		"https://images-eu.ssl-images-amazon.com/images/I/81YDuTWSHyL.png",
		"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
		"https://www.xerox.com/sites/default/files/wallpaper_sunset_600x600.jpg",
		"https://i0.wp.com/www.blablahightech.fr/wp-content/uploads/2015/03/Minimal-Aircrafts-Wallpaper-1024x576.jpg?resize=658%2C370",
		"https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
	];

	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
		>
			<Masonry>
				{images.map((image, i) => (
					<div
						id="masonry-grid"
						onClick={() => {
							console.log(i);
						}}
						key={i}
					>
						<img
							key={i}
							src={image}
							style={{
								width: "100%",
								display: "block",
							}}
							alt=""
						/>
					</div>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default Gallery;
