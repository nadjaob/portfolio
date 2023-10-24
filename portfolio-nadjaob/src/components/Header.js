import { Link } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// ICONS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// COMPONENTS
import Nav from './Nav'


export default function Header() {
  return (
    <header>
      <Nav />
      <Container className='header-container'>
        <Row>
          <Col>
            <h1>Hi I'm Nadja!</h1>
            <h2>A Full Stack Developer with a background in Design</h2>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob' target='_blank'>GitHub</Link>
              <Link className='button-color' to='https://www.linkedin.com/in/nadja-oblaender/' target='_blank'>LinkedIn</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}