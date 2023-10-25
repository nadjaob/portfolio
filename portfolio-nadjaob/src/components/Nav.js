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
            <Link to='/' className='name-nav'>NADJA OBLAENDER</Link>
          </Col>
          <Col className='nav-links'>
            <Link href='#about'>About</Link>
            <Link to='#projects'>Projects</Link>
            <Link to='#contact'>Contact</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}