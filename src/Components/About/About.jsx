import React from 'react'
import './About.css'
import Logo from '../Hero/Shahzeb1.png'
import { IoMdDownload } from "react-icons/io";
import { motion } from "motion/react"

const About = () => {
  return (
  
<section className="about" id="about">

<motion.div  initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} className="about-left">

<img src={Logo}alt="" />

</motion.div>

<motion.div  initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} className="about-right">

<h1>

About <span>Me</span>

</h1>

<p>

I'm a BS Software Engineering student with a strong passion for Web Development and creating modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions using clean code and creative design.

</p>

<a  href='/ShahZebCv.pdf' download='ShahZebCv.pdf' className='btn'>

Download Cv
<IoMdDownload/>
</a>

</motion.div>

</section>

  )
}

export default About
