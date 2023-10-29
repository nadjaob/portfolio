import { Link } from 'react-scroll'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Nav() {

  const navLinks = ['about', 'projects', 'experience', 'contact']

  return (
    <nav>
      <Container>
        <Row className='navigation'>
          <Col>
            <Link to='header' activeClass='active' spy={true} smooth={true} duration={10} className='name-nav'>Nadja Oblaender</Link>
          </Col>
          <Col className='nav-links'>
            {navLinks.map(navLink => {
              return <Link to={navLink} activeClass='active' spy={true} smooth={true} duration={10}>{navLink}</Link>
            })}
          </Col>
        </Row>
      </Container>
    </nav>
  )
}