import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	const currentProject = useState(props)[0].projects;
	const image = currentProject.image;
	return (
		<div className="center">
		<Card className="card-image bg-dark text-white">
			<Card.Img src={require(`../../assets/images/${image}`)} className="card-image"/>
			<Card.ImgOverlay>
			<Card.Title>Project 1</Card.Title>
			<Card.Text>This is a test</Card.Text>
			</Card.ImgOverlay>
		</Card>
		</div>
	);
}

export default Project;