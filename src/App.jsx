import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Footer from './components/Footer'
import ProjectList from './pages/ProjectList'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Vision />
            </>
          } />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
