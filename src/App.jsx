import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
