import './App.css'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </BrowserRouter>
  )
}

export default App
