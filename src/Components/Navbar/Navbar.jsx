import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Navbar/logo.jpg'
import './Navbar.css'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from "motion/react"

const Navbar = () => {
  const [menu, setMenu] = useState('Home')
  const navigate = useNavigate()

  const handleNav = (name, path) => {
    setMenu(name)
    navigate(path)
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='nav-item'>
        <ul>
          <li className={menu === 'Home' ? 'active' : ''} onClick={() => handleNav('Home', '/')}>
            Home
            <span className='nav-indicator' />
          </li>
          <li className={menu === 'Project' ? 'active' : ''} onClick={() => handleNav('Project', '/project')}>
            Project
            <span className='nav-indicator' />
          </li>
          <li className={menu === 'Skills' ? 'active' : ''} onClick={() => handleNav('Skills', '/skills')}>
            Skills
            <span className='nav-indicator' />
          </li>
          <li className={menu === 'About' ? 'active' : ''} onClick={() => handleNav('About', '/About')}>
            About
            <span className='nav-indicator' />
          </li>
        </ul>
      </div>
      <div className='nav-media'>
        <motion.ul initial={{scale:0}}animate={{scale:1}} >
          <li>
            <a href='https://www.facebook.com/profile.php?id=61588363410640' target='_blank' rel='noreferrer'>
              <FaFacebook className='facebook' />
            </a>
          </li>
          <li>
            <a href='https://github.com/ShahzebMalik389' target='_blank' rel='noreferrer'>
              <FaGithub className='github' />
            </a>
          </li>
          <li>
            <a href='https://wa.me/923199171040' target='_blank' rel='noreferrer'>
              <FaWhatsapp className='whatsapp' />
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Navbar
