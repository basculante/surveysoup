import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro-textbox">
				<div>
					<h1 className="intro-main">Survey Soup</h1>
				</div>
				<div className="intro-subtitle">
					<h6>Create surveys, share surveys, visualize data.</h6>
				</div>
				<div>
					<Link to="/surveys" className="intro-btn-link">
						<button className="intro-btn waves-effect waves-light btn-large">
							View Surveys
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Intro;
