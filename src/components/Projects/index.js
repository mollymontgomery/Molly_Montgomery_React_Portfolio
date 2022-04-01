import bookShelfImg from "../../assets/images/bookshelf.jpg";
import DinderImg from "../../assets/images/Dinder.png";
import portfolioOne from "../../assets/images/portfolioOne.jpg";
import recipeImg from "../../assets/images/recipe.png";
import runBuddy from "../../assets/images/run-buddy.jpeg";
import socialNetwork from "../../assets/images/social.jpg";


const projects = [
	{
		"id": 1,
		"images": bookShelfImg,
		"alt": "Screenshot of BookShelf homepage",
		"title": "BookShelf",
		"className": "blur",
		"deployedUrl": "https://bookshelf22.herokuapp.com/",
		"githubUrl": "https://github.com/mollymontgomery/BookShelf"
	},
	{
		"id": 2,
		"images": DinderImg,
		"alt": "Screenshot of the Dinder app hoomepage",
		"title": "Dinder",
		"className": "blur",
		"deployedUrl": "http://dinder-dog.herokuapp.com/",
		"githubUrl": "https://github.com/mollymontgomery/doggy-days"
	},
	{
		"id": 3,
		"images": portfolioOne,
		"alt": "Screenshot of my first portfolio",
		"title": "Portfolio HTML/CSS",
		"className": "blur",
		"deployedUrl": "https://mollymontgomery.github.io/Professional_Portfolio/",
		"githubUrl": "https://github.com/mollymontgomery/Professional_Portfolio"
	},
	{
		"id": 4,
		"images": recipeImg,
		"alt": "Screenshot of the recipe guide app homepage",
		"title": "Recipe Guide",
		"className": "blur",
		"deployedUrl": "https://mollymontgomery.github.io/Group-11-Project/",
		"githubUrl": "https://github.com/mollymontgomery/Group-11-Project"
	},
	{
		"id": 5,
		"images": runBuddy,
		"alt": "The run buddy app homepage",
		"title": "Run Buddy",
		"className": "blur",
		"deployedUrl": "https://mollymontgomery.github.io/run-buddy/",
		"githubUrl": "https://github.com/mollymontgomery/run-buddy"
	},
	{
		"id": 6,
		"images": socialNetwork,
		"alt": "Screenshot of the backend of the Social Network app",
		"title": "Social Network API",
		"className": "blur",
		"githubUrl": "https://github.com/mollymontgomery/Social_Network_API"
	}
]

export default projects;

