import React from 'react'
import shahzeb from '../Hero/Shahzeb1.png'
import './Hero.css'
import { IoMdDownload } from "react-icons/io";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className='hero'>
         
         <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="right">
            <p className='hello'>Hello, I'm <span className='heading'>Shah Zeb</span></p>
            <h2 className='heading1'>Turning Ideas Into Modern Web Expriences</h2>
            <p className='pargh'>I build modern,responsive,and user-friendly web application using Html,Css,Js,TailwindCss,React.js,Node.js,Express.js and MongoDB</p>
            <a href='/ShahZebCv3634.pdf' download='ShahZebCv3634.pdf' className='btn'>Download cv<IoMdDownload /></a>
         </motion.div>
         <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} className="left">
            <img src={shahzeb} alt="" />
         </motion.div>
    </div>
  )
}

export default Hero
