import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Project from './Components/ProjectUi/Project'
import { Route, Routes } from 'react-router-dom'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/project' element={<Project />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
