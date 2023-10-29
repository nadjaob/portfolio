// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Contact() {
  return (
    <Container fluid id='contact'>
      <Container>
        <Row>
          <Col className='footer-container'>
            <h5>I'm currently avaible to work, contact me for a chat!</h5>
            <div className='contact-details'>
              <p><Link to='mailto:nadja.oblaender@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} size='md' style={{ color: '#fff' }} /> nadja.oblaender@gmail.com</Link></p>
              <p><Link to='https://github.com/nadjaob' target='_blank'><FontAwesomeIcon icon={faGithub} size='md' style={{ color: '#fff' }} /> github.com/nadjaob</Link></p>
              <p><Link to='https://www.linkedin.com/in/nadja-oblaender/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='md' style={{ color: '#fff' }} /> linkedin.com/in/nadja-oblaender </Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}