import React from 'react'
import './Project.css'
const Project = () => {

  const projects = [
  {
    title: "Portfolio Website",
    desc: "Html,css portfolio website, Project, Contact and Home.",
    link: "https://shahzebmalik389.github.io/Portflio/"
  },
   {
    title: "Brands Website",
    desc: "Shopping website using React, Node and MongoDB.",
    link: " https://shahzebmalik389.github.io/first-Project/"
  },
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio built using ReactJS.",
    link: "https://sudaisportflio.netlify.app/"
  }
 
  
];

  return (
    <section className="project-section" id="project">

      <h1>
        My <span>Projects</span>
      </h1>

      <div className="project-container">

        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <a href={item.link} target="_blank" rel="noreferrer">View Project</a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Project
