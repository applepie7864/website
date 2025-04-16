export type Experience = {
  company: string;
  title: string;
  date: string;
  location: string;
  website: string;
  logo: string;
  summary: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  technologies: string[];
  image: string;
};

export type LinkBlockProps = {
  showLinkedin?: boolean;
  showGithub?: boolean;
  showEmail?: boolean;
  showSpotify?: boolean;
  showInstagram?: boolean;
  showResume?: boolean;
}
