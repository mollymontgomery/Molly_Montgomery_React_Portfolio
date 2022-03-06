import React from 'react';
import Project from '../../components/Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
            image: 'run-buddy.png',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://mollymontgomery.github.io/run-buddy/',
		},
        {
			name: 'Recipe Guide',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'API',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://mollymontgomery.github.io/Group-11-Project/',
		},
		{
			name: 'HTML/CSS Portfolio',
            image: 'portfolioOne.jpg',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://mollymontgomery.github.io/Professional_Portfolio/',
		},
        {
			name: 'Tech Blog',
            image: 'techblog.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Handlebars',
			],
			github: 'https://github.com/mollymontgomery/Tech_Blog',
			deployed: 'https://rocky-inlet-09350.herokuapp.com/',
		},
		{
			name: 'BookShelf',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Handlebars',
				'API',
			],
			github: 'https://github.com/AlexTheAmateur/BookShelf',
			deployed: ' https://bookshelf22.herokuapp.com/',
		},
		{
			name: 'Social Network API',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Mongoose',
				'MongoDB',
				'Insomnia',
			],
			github: 'https://github.com/mollymontgomery/Social_Network_API',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;