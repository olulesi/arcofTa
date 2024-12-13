import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Arc2 from './components/Arc2'
import Midnight from './components/Arc1/Midnight'
import Contact from './components/ContactLayout'
import About from './components/AboutLayout'
import Archives from './components/ArchivesLayout'
import Project from './components/ProjectLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/demo" element={<Arc2 />} />
          <Route exact path="/Midnight" element={<Midnight />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Archives" element={<Archives />} />
          <Route exact path="/Arc1" element={<Project />} />
          {/* <Route exact path="/Bourbon" element={<Home />} />
        <Route exact path="/Sahara" element={<Home />} />
        <Route exact path="/Cocaine" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
