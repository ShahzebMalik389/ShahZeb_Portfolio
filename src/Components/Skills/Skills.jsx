import React from 'react'
import './Skills.css'
import Html from "./Html.png";
import css from "./Css.png";
import js from "./Js.png";
import react from "./Reactjs.png";
import node from "./Nodejs.jpg";
import Tailwind from "./Tailwindcss.jpg";


const Skills = () => {
const skills = [
  {
    image: Html,
    name: "HTML5",
    exp: "2 Years Experience",
  },
  {
    image: css,
    name: "CSS3",
    exp: "2 Years Experience",
  },
  {
    image: js,
    name: "JavaScript",
    exp: "2 Years Experience",
  },
  {
    image: react,
    name: "React JS",
    exp: "1.5 Years Experience",
  },
  {
    image: node,
    name: "Node JS",
    exp: "1 Year Experience",
  },
  {
    image: Tailwind,
    name:"TailwindCss",
    exp:"1 Year"
  }

];

  return (
  <section className="skills-section" id="skills">

      <h1>
        My <span>Skills</span>
      </h1>

      <div className="skills-container">

        {skills.map((item, index) => (
          <div className="skill-card" key={index}>

            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>{item.exp}</p>

          </div>
        ))}

      </div>

    </section>

  )
}

export default Skills
