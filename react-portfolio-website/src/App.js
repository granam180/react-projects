import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Skills from './components/Skills'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Carousel from 'react-multi-carousel'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects-2" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App