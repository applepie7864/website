import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="pl-[34.5rem] pr-20 pt-16 flex flex-row justify-between flex-wrap">
      <ProjectCard 
        projectName="2048"
        mainTool="Unity"
        githubRepo="https://github.com/applepie7864/2048"
        projectDescription="Object oriented implementation of the popular webgame 2048"
      />
      <ProjectCard 
        projectName="ISPY"
        githubRepo="https://github.com/applepie7864/ispy"
        mainTool="Tensorflow"
        projectDescription="Custom face recognition model integrated into a webcam application"
      />
      <ProjectCard 
        projectName="PORTFOLIO"
        githubRepo="https://github.com/applepie7864/portfolio-2023"
        mainTool="React"
        projectDescription="Old interactive portfolio from 2023"
      />
      <ProjectCard 
        projectName="DOCUVERSE"
        githubRepo="https://github.com/applepie7864/docuverse"
        mainTool="Langchain"
        projectDescription="AI chatbot application for querying your documents"
      />
      <ProjectCard 
        projectName="CC3K"
        githubRepo="https://github.com/applepie7864/cc3k"
        mainTool="C++"
        projectDescription="Terminal based dungeon crawling video game inspired by Rogue"
      />
      <ProjectCard 
        projectName="APPLE WEBSITE"
        githubRepo="https://github.com/applepie7864/apple-remake"
        mainTool="Javascript"
        projectDescription="Imitation of Apple's website with Javascript animations"
      />
    </section>
  )
}

