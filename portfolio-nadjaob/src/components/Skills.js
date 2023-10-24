// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faCodeFork, faLaptopCode, faPenNib, faListCheck, faBookOpen } from '@fortawesome/free-solid-svg-icons'


export default function Skills() {
  return (
    <Container className='container-skills'>
      <Row>
        <h3>Skills</h3>
        <Col xs='12' className='flex-container'>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faReact} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Frontend</h4>
            <p>React - JavaScript - HTML - CSS - Sass - Bootstrap</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faCode} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Backend</h4>
            <p>Node.js - Express - Python - Django</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faDatabase} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Databases</h4>
            <p>PostgreSQL - MongoDB - Mongoose</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faCodeFork} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Version control & collaboration</h4>
            <p>GitHub - Git</p>
          </div>
        </Col>
        <Col xs='12' className='flex-container'>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faPenNib} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Design & UI</h4>
            <p>Adobe Suite - Figma</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faLaptopCode} style={{ color: '#ffffff' }} size='2xl' />
            <h4>CMS</h4>
            <p>Wordpress - Shopware</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faListCheck} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Project & time management</h4>
            <p>Trello - Slack</p>
          </div>
          <div className='container-skill'>
            <FontAwesomeIcon icon={faBookOpen} style={{ color: '#ffffff' }} size='2xl' />
            <h4>Currently learning</h4>
            <p>TypeScript</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}