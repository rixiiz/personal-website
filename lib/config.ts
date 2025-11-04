import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Boyuan Li",
	headline: "Aspiring Software Developer and ML Enthusiast",
	bio: "Coming from France, I’m a Computer Science and Engineering major at UCLA passionate about developing solutions to solve real-world problems. I also have a strong interest in Machine Leaning and am actively reading and learning about the field. Currently seeking internship opportunities for the summer of 2026.",

	// Your contact email
	email: "boyuanl6@g.ucla.edu",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/rixiiz" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/boyuanli07/" },
		// { name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"Python", "Java", "C++", "NumPy", "Pandas",
		"Matplotlib", "Scikit-Learn", "Object-Oriented-Programming", "Data Structures and Algorithms", "Graphical-User-Interface", "HTML", "CSS"
	],

	// Add your projects here
	projects: [
		{
			title: "Drum Learner",
			description: "A drum machine learning model that aims to auto-generate 100+ unique rhythms and convert songs into drum patterns, visualized in a GUI that displays the beats as 4-bar rhythmic partitions.",
			stack: ["Python", "Tkinter", "Magenta", "LilyPond"],
			githubLink: "https://github.com/rixiiz/Drum-Learner",
			liveLink: "",
		},
		{
			title: "Accessible Gaming - Flappy Bird",
			description: "Used an AWS image recognition model to make gaming more accessible by allowing players to play with facial features (in this case their tongue). This mechanism can also be implemented in games with one physical action such as Geometry Dash.",
			stack: ["Python", "opencv", "boto3"],
			githubLink: "https://github.com/rixiiz/Accessible-Flappy-Bird",
			liveLink: "",
		},
		{
			title: "OBP Predictor For MLB Players",
			description: "An optimized KNN model capable of predicting the On Base Percentage (OBP) of Major League Baseball (MLB) players at the end of the season given their stats in the beginning of the same season.",
			stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
			githubLink: "https://github.com/rixiiz/Using-KNN-to-predict-the-OBP-of-MLB-players",
			liveLink: "",
		},
		{
			title: "Physics Quiz App",
			description: "A GUI with user-interactive features that uses multiple-choice format question to help students (more specifically IB physics) revise efficiently.",
			stack: ["Java", "Java Swing", "Object-Oriented-Programming", "Model-View-Controller framework", "Apache-POI", "Excel"],
			githubLink: "https://github.com/rixiiz/Physics-Quiz-App",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "UI/UX Designer and Developer",
			company: "UCLA DevX, Project BruinChat",
			date: "October 2025 - Present",
			location: "Los Angeles, California",
			description: "Working with a 14-member team to design and build an app that automatically creates course-based group chats. Designing the app with wireframes and prototypes, building front-end interfaces, and contributing to backend code, logic, and project structure."
		},
		{
			role: "Technical Marketing Intern",
			company: "PayPal",
			date: "June 2023 - July 2023",
			location: "Paris, France",
			description: "Developed an algorithm of over 100 lines of code with Python to help marketing teams to efficiently organize products and services in their database systems. Documented 16 meetings, researched likely collaborators, and drafted 5 professional emails to propose partnerships."
		},
		{
			role: "Competitive Programmer",
			company: "USA Computing Olympiad",
			date: "December 2022 - March 2023",
			location: "Paris, France",
			description: "Competed in 3 competitions and completed a total of 9 problems of increasing difficulty to reach Gold Division. Coded algorithms with the most optimized time complexity like Depth-First-Search, Breadth-First-Search, or Dynamic Programming in C++."
		},
		{
			role: "Web Developer",
			company: "Joker Solidaire",
			date: "October 2022 - March 2023",
			location: "Paris, France",
			description: "Built and designed the website for Joker Solidaire, a startup making card decks accessible for people with disabilities, and generated €500+ in revenue."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science and Engineering",
			institution: "University of California, Los Angeles",
			date: "Expected June 2029",
			note: "Member of Association of Computing Machinary AI (parcitipating in Kaggle competitions), DevX, Bruin Software Engineers, and Bruin Machine Learning Analytics"
		},
		{
			degree: "5th Place in the French Go Championship 2025",
			institution: "La Federation Francaise de Go",
			date: "August 2025",
			note: ""
		},
		{
			degree: "1st Place in the French Baseball Championship 2024",
			institution: "La Federation Francaise de Baseball",
			date: "June 2024",
			note: ""
		},
		{
			degree: "Concours Alkindi Finalist",
			institution: "France IOI",
			date: "March 2021",
			note: "French Competitive Programming Contest"
		}
	]
};


export default PORTFOLIO_DATA;


