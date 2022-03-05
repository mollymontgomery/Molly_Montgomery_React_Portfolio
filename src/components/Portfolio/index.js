import React from 'react';
import Project from '../../components/Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Project1',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
		
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
		},
        {
			name: 'Project2',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
		
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
		},
		{
			name: 'Project3',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
		},
        {
			name: 'Project4',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
		},
		{
			name: 'Project5',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
		},
		{
			name: 'Project6',
			description:
            'This is where the desription will go',
            image: 'placeholder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/mollymontgomery',
			deployed: 'https://github.com/mollymontgomery',
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