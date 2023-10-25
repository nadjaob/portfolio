import './App.css'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </BrowserRouter>
  )
}

export default App
