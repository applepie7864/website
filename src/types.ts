export type General = {
    name: string;
    title: string;
    description: string;
    year: string;
    location: string;
};

export type Links = {
    linkedin: string;
    github: string;
    email: string;
    spotify: string;
    instagram: string;
    website: string;
    gallery: string;
};

export type Experience = {
    company: string;
    title: string;
    type: string
    date: string;
    location: string;
    website: string;
    logo: string;
    summary: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    link: string;
    technologies: string[];
};
