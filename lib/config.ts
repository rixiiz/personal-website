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
		"Python", "TypeScript", "C++", "SQL", "PostgreSQL", "Node.js", "React", "Next.js",
		"Git", "Docker", "FastAPI", "scikit-learn", "NumPy", "pandas", "Object-Oriented-Programming", "Data Structures and Algorithms"
	],

	// Add your projects here
	projects: [
		{
			title: "Market Agents",
			description: "Created a multi-agent LLM trading simulation with 3 distinct personas that take in live news every 15 minutes, communicate with each other, and produce a consensus forecast benchmarked against index and naïve models. Implemented ChromaDB and RAG pipeline to ground agent decisions over 100+ live news without hallucinations.",
			stack: ["Python", "FastAPI", "GenAI", "LangChain", "NumPy", "pandas", "ChromaDB"],
			githubLink: "https://github.com/shojha24/BMLA-W25-Agentic-Stock-Sim",
			liveLink: "",
		},
		{
			title: "YC Predictor",
			description: "Scraped and labeled a dataset of 100+ YC pitch videos and extracted features (Whisper transcripts, sentencetransformer embeddings, and initial 10 frames for visuals) to train a PyTorch neural network acceptance predictor. Model evaluates at a threshold of 0.5 with a 90.5% accuracy and 86.9% balanced accuracy and was deployed on a web platform using FastAPI, Node.js, and Next.js to predict pitches, store predictions, and show key contributions.",
			stack: ["Node.js", "React", "Next.js", "TypeScript", "Python", "FastAPI", "scikit-learn", "Whisper"],
			githubLink: "https://github.com/rixiiz/yc-predictor",
			liveLink: "",
		},
		{
			title: "Labradoor",
			description: "",
			stack: ["Node.js", "React", "Next.js", "Express", "TypeScript", "Prisma", "Docker", "PostgreSQL"],
			githubLink: "Architected and shipped a production-ready multi-service web platform enabling UCLA labs to publish openings, manage researcher workflows, centralize undergraduate applications, and collaborate with members through groups. Built TypeScript/Express API with Prisma-backed PostgreSQL schema supporting posts and student applications. Deployed Dockerized infrastructure with CI/CD, environment variable management, and database migration flows.",
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
			description: "Optimized a K-Nearest-Neighbor regression model to predict MLB players’ OBP using 100+ past batting statistics. The model, enhanced through the Elbow Method and Cross-Validation, achieved a Mean Square Error of ~0.002.",
			stack: ["Python", "NumPy", "pandas", "Matplotlib", "scikit-learn"],
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
			role: "GuideAI",
			company: "AI Software Engineer Intern",
			date: "January 2026 - Present",
			location: "Los Angeles, California",
			description: "Standardized AI prompt pipelines for the LLM to understand 6 client websites and guide users through navigation. Shipped 4 production updates, including admin and product features, using React, TypeScript, and Next.js."
		},
		{
			role: "R&D Venture Cohort 1, Inc.",
			company: "Software Engineer",
			date: "November 2025 - Present",
			location: "New York City, NY (Remote)",
			description: "Built an offline-first inspection platform for home repair cost estimation using React Native, SQLite, Node.js, and PostgreSQL, enabling engineers to capture 100+ photos and 30+ voice observations per inspection with auto-sync. Implemented a voice-to-report pipeline using Whisper and semantic search to convert field dictations into reports."
		},
		{
			role: "UCLA DevX",
			company: "Frontend Developer",
			date: "October 2025 - Present",
			location: "Los Angeles, California",
			description: "Worked with a 14-member team to design and build an app that automatically creates course-based group chats. Engineered a React/Tailwind CSS frontend while implementing a Node.js backend using Git for version control."
		},
		{
			role: "PayPal",
			company: "Software Engineer Intern (Marketing Tech)",
			date: "June 2023 - July 2023",
			location: "Paris, France",
			description: "Developed a tested algorithm of over 100 lines of code with Python to help marketing teams manage their database. Documented 16 meetings, researched likely collaborators, and drafted 5 professional emails to propose partnerships."
		},
		{
			role: "USA Computing Olympiad Gold",
			company: "Competitive Programmer",
			date: "December 2022 - March 2023",
			location: "Paris, France",
			description: "Competed in 3 competitions and completed a total of 9 problems of increasing difficulty to reach Gold Division. Coded algorithms with the most optimized time complexity like Depth-First-Search, Breadth-First-Search, or Dynamic Programming in C++."
		},
		{
			role: "Joker Solidaire",
			company: "Software Engineer",
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













