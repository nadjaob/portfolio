import { Link } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import me from '../images/nadja-oblaender-circle.png'

// ICONS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// COMPONENTS
import Nav from './Nav'
import Typewriter from './Typewriter'


export default function Header() {
  return (
    <header id='header'>
      <Nav />
      <Container className='header-container'>
        <Row>
          <Col md='7'>
            <h1><Typewriter text="Hi I'm Nadja!" delay={150}/></h1>
            <h2>A Full Stack Developer with a background in Design</h2>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob' target='_blank'>GitHub</Link>
              <Link className='button-color' to='https://www.linkedin.com/in/nadja-oblaender/' target='_blank'>LinkedIn</Link>
            </div>
          </Col>
          <Col md='5'>
            <img src={me} alt='This is me!' className='image-of-me'/>
          </Col>
        </Row>
      </Container>
    </header>
  )
}