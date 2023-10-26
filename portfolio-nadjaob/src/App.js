import './App.css'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Skills />
      <About />
      
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}

export default App
