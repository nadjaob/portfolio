import { Link } from 'react-router-dom'

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
            <p className='mb-0'>NADJA</p>
          </Col>
          <Col className='nav-links'>
            <Link href='#about'>About me</Link>
            <Link to='#projects'>Projects</Link>
            <Link to='#skills'>Skills</Link>
            <Link to='#contact'>Contact</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}