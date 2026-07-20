import React from 'react'
import shahzeb from '../Hero/Shahzeb1.png'
import './Hero.css'
import { IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <div className='hero'>
         
         <div  className="right">
            <p className='hello'>Hello, I'm <span>Shah Zeb</span></p>
            <h2>Turning Ideas Into Modern Web Expriences</h2>
            <p className='pargh'>I build modern,responsive,and user-friendly web application using React.js,Node.js,Express.js and MongoDB</p>
            <a href='/ShahZebCv.pdf' download='ShahZebCv.pdf' className='btn'>Download cv<IoMdDownload /></a>
         </div>
         <div className="left">
            <img src={shahzeb} alt="" />
         </div>
    </div>
  )
}

export default Hero
