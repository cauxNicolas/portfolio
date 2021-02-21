import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Work = () => {
	const { id } = useParams();
	return <div className="content">work id : {id}</div>;
};

export default Work;
