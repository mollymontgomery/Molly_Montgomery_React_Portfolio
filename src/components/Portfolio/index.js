import React from 'react';
import projects from '../../components/Projects';

function Portfolio() {
	return (
		<div className="grid">
			{projects.map((project) => (
				<div className="img-wrapper" key={project.id}>
					<img src={project.images} alt={project.alt} className={project.className} />
					<div className="content fade" key={project.id}>
						<h3>{project.title}</h3>
						<a href={project.deployedUrl}><button>Check it out here!</button></a>
						<br></br>
						<br></br>
						<a href={project.githubUrl}><button>GitHub Repository</button></a>
					</div>
				</div>
			))}
		</div>
	);
}

export default Portfolio;

// 	const projects = [
// 		{
// 			name: 'Run Buddy',
//             image: 'run-buddy.jpeg',
// 			technologies: [
// 				'HTML/CSS',
// 			],
// 			github: 'https://github.com/mollymontgomery',
// 			deployed: 'https://mollymontgomery.github.io/run-buddy/',
// 		},
//         {
// 			name: 'Recipe Guide',
//             image: 'Main_Page.png',
// 			technologies: [
// 				'HTML/CSS',
// 				'JavaScript',
// 				'API',
// 			],
// 			github: 'https://github.com/mollymontgomery',
// 			deployed: 'https://mollymontgomery.github.io/Group-11-Project/',
// 		},
// 		{
// 			name: 'HTML/CSS Portfolio',
//             image: 'portfolioOne.jpg',
// 			technologies: [
// 				'HTML/CSS',
// 			],
// 			github: 'https://github.com/mollymontgomery',
// 			deployed: 'https://mollymontgomery.github.io/Professional_Portfolio/',
// 		},
//         {
// 			name: 'Tech Blog',
//             image: 'techblog.jpg',
// 			technologies: [
// 				'HTML/CSS',
// 				'JavaScript',
// 				'Handlebars',
// 			],
// 			github: 'https://github.com/mollymontgomery/Tech_Blog',
// 			deployed: 'https://rocky-inlet-09350.herokuapp.com/',
// 		},
// 		{
// 			name: 'BookShelf',
//             image: 'bookshelf.jpg',
// 			technologies: [
// 				'HTML/CSS',
// 				'JavaScript',
// 				'Handlebars',
// 				'API',
// 			],
// 			github: 'https://github.com/AlexTheAmateur/BookShelf',
// 			deployed: ' https://bookshelf22.herokuapp.com/',
// 		},
// 		{
// 			name: 'Social Network API',
//             image: 'social.jpg',
// 			technologies: [
// 				'HTML/CSS',
// 				'JavaScript',
// 				'Mongoose',
// 				'MongoDB',
// 				'Insomnia',
// 			],
// 			github: 'https://github.com/mollymontgomery/Social_Network_API',
// 			deployed: 'https://github.com/mollymontgomery/Social_Network_API',
// 		},
// 	];

// 	return (
// 		<section>
// 			<div className="center">
// 				<h1 className="page-header">My Portfolio</h1>
// 			</div>
// 			<div>
// 				<ul className="flex-row mobile-row">
// 					<li className="padding">
// 						<Project projects={projects[0]}></Project>
// 					</li>
// 					<li className="padding">
// 						<Project projects={projects[1]}></Project>
// 					</li>
// 				</ul>
// 				<ul className="flex-row mobile-row">
// 					<li className="padding">
// 						<Project projects={projects[2]}></Project>
// 					</li>
// 					<li className="padding">
// 						<Project projects={projects[3]}></Project>
// 					</li>
// 				</ul>
// 				<ul className="flex-row mobile-row">
// 					<li className="padding">
// 						<Project projects={projects[4]}></Project>
// 					</li>
// 					<li className="padding">
// 						<Project projects={projects[5]}></Project>
// 					</li>
// 				</ul>
// 			</div>
// 		</section>
// 	);
// }

