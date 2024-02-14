import './App.css'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Skills from './components/Skills'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </BrowserRouter>
  )
}

export default App
