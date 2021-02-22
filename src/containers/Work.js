import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

	console.log(work);

	return (
		<div className="content">
			{isLoading === true ? (
				<>
					<div>work id : {id}</div>
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
