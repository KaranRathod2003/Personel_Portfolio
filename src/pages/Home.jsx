import React from 'react'
import './Home.css'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <>
    <div className="main">
     <div className="header1"><h1>Hi! I'm</h1></div>
     <div className="header2"><h1>Karann</h1></div>
     <div className="para">Welcome to my Online space. Your Friendly AI powered Full Stack Developer</div>
    </div>
    <Skills />
    </>
  )
}

export default Home