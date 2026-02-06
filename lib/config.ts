import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Boyuan Li",
	headline: "Aspiring Software Developer and ML Enthusiast",
	bio: "Coming from France and based in Los Angeles, I’m a Computer Science major at UCLA passionate about developing solutions to solve real-world problems. I also have a strong interest in Machine Leaning and am actively reading and learning about the field. Currently seeking internship opportunities for the summer of 2026.",

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
		"Python", "C++", "Java", "NumPy", "Pandas",
		"Matplotlib", "Scikit-Learn", "TypeScript", "React", "Next.js", "NPM", "Node.js", "Docker", "FastAPI", "Git", "Object-Oriented-Programming", "Data Structures and Algorithms"
	],

	// Add your projects here
	projects: [
		{
			title: "Market Agents",
			description: "Created a multi-agent LLM trading simulation with 3 distinct personas that take in live news every 15 minutes, communicate with each other, and produce a consensus forecast benchmarked against index and naïve models. Implemented ChromaDB and RAG pipeline to ground agent decisions over 100+ live news without hallucinations.",
			stack: ["Python", "FastAPI", "GenAI", "LangChain", "NumPy", "Pandas", "ChromaDB"],
			githubLink: "https://github.com/shojha24/BMLA-W25-Agentic-Stock-Sim",
			liveLink: "",
		},
		{
			title: "YC Predictor",
			description: "Scraped and curated a labeled dataset of YC pitch videos, and extracted multimodal features (Whisper transcripts, sentence-transformer embeddings, and visual statistics in frames) to train a logistic regression acceptance predictor. Deployed model via a FastAPI inference service and a Next.js interface for new pitch videos with prediction history.",
			stack: ["TypeScript", "Next.js", "NPM", "Python", "FastAPI", "Scikit-Learn", "Whisper"],
			githubLink: "https://github.com/rixiiz/yc-predictor",
			liveLink: "",
		},
		{
			title: "Labradoor",
			description: "Co-developing a platform for UCLA research professors to post lab positions and for students to apply directly. Building the frontend with TypeScript, React, and Next.js, implementing efficient UI and intuitive user navigation. Engineering backend, implementing APIs, and managing databases with Prisma using TypeScript, NPM, and Git.",
			stack: ["TypeScript", "React", "Next.js", "Git", "Docker", "Prisma", "NPM"],
			githubLink: "",
			liveLink: "app.labadoor.org",
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
			role: "AI Software Engineer Intern",
			company: "GuideAI",
			date: "January 2026 - Present",
			location: "Los Angeles, California",
			description: "Standardized AI prompt pipelines for the LLM to understand 6 client websites and guide users through navigation. Deployed 4 system updates on the website, including admin feature development, with React, TypeScript, and Git."
		},
		{
			role: "Software Engineer",
			company: "R&D Venture Cohort 1, Inc.",
			date: "November 2025 - Present",
			location: "New York, NY (Remote)",
			description: "Built an offline-first inspection platform for home repair cost estimation using React Native, SQLite, Node.js, and PostgreSQL, enabling engineers to capture 100+ photos and 30+ voice observations per inspection with auto-sync. Implemented a voice-to-report pipeline using Whisper and semantic search to convert field dictations into reports."
		},
		{
			role: "Frontend Developer",
			company: "UCLA DevX, Project BruinChat",
			date: "October 2025 - Present",
			location: "Los Angeles, California",
			description: "Worked with a 14-member team to design and build an app that automatically creates course-based group chats. Engineered the frontend using React and Tailwind CSS while implementing a Node.js backend using NPM and Git."
		},
		{
			role: "Software Engineer Intern (Marketing Tech)",
			company: "PayPal",
			date: "June 2023 - July 2023",
			location: "Paris, France",
			description: "Developed a tested algorithm of over 100 lines of code with Python to help marketing teams manage their database. Documented 16 meetings, researched likely collaborators, and drafted 5 professional emails to propose partnerships."
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
			description: "Built and designed the website for Joker Solidaire: a startup making card decks accessible for people with disabilities. Generated €500+ in revenue."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "Expected June 2028",
			note: "Member of Association of Computing Machinary AI (parcitipating in Kaggle competitions), DevX, Bruin Software Engineers, and Bruin Machine Learning & Analytics, Bruin Sports Analytics"
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











