import { Link } from 'react-scroll'
import { useState } from 'react'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


export default function Nav() {

  const [showMobileNav, setShowMobileNav] = useState(false)

  const navLinks = ['Projects', 'Experience', 'Skills', 'About', 'Contact']

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
          <Col className='nav-mobile'>
            <div onClick={() => setShowMobileNav(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
          <Modal show={showMobileNav} fullscreen={true} onHide={() => setShowMobileNav(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <Link onClick={() => setShowMobileNav(false)} to='header'>Start</Link>
                {navLinks.map(navLink => {
                return <Link onClick={() => setShowMobileNav(false)} to={navLink}>{navLink}</Link>
                })}
              </Modal.Body>
            </Modal>
        </Row>
      </Container>
    </nav>
  )
}