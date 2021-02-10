import React from "react";
import { useParams } from "react-router-dom";

const Work = () => {
	const { id } = useParams();
	return <div>work id : {id}</div>;
};

export default Work;
