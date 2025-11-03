export type Portfolio = {
	name: string;
	headline: string;
	bio: string;
	email: string;
	links: { name: string; url: string }[];
	skills: string[];
	projects: Project[];
	experience: Experience[];
	education: Education[];
};

export type Project = {
	title: string;
	description: string;
	stack: string[];
	githubLink: string;
	liveLink: string;
};

export type Experience = {
	role: string;
	company: string;
	date: string;
	location: string;
	description: string;
};

export type Education = {
	degree: string;
	institution: string;
	date: string;
	note: string;
};