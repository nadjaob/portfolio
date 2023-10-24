import { NavLink } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Nav() {
  return (
    <nav>
      <Container>
        <Row className='navigation'>
          <Col>
            <p>NADJA</p>
          </Col>
          <Col className='nav-links'>
            <NavLink to='#about'>About me</NavLink>
            <NavLink to='#projects'>Projects</NavLink>
            <NavLink to='#skills'>Skills</NavLink>
            <NavLink to='#contact'>Contact</NavLink>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}