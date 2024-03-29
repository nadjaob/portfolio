// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Skills from './Skills'

// IMAGES
// import logoIMC from '../images/logo-imc.webp'
// import logoGA from '../images/logo-general-assembly.png'


export default function Experience() {
  return (
    <Container className='container-experience' id='Experience'>
      <Row>
      <h3>Experience</h3>
        <Col xs='12' md='6' className='experience-col'>
          {/* <img src={logoGA} alt='Logo Generaly Assembly' /> */}
          <p><strong>Software Engineering Immersive - General Assembly</strong><br /><span className='experience-details'>London, UK (Remote) | 07/2023 - 10/2023</span></p>
          <p>I joined a full-time 3 month course which covered the fundamentals of web development through lessons and project work, taught by industry professionals.</p>
          <p>Throughout the course we undertook 4 projects based on several languages and frameworks. We also had daily stand ups to discuss our progress and blockers, engaged in pair programming and prepared presentations for our project work.</p>
        </Col>
        <Col xs='12' md='6' className='experience-col'>
          {/* <img src={logoIMC} alt='Logo imc marketing & consult gmbh' /> */}
          <p><strong>Web Developer / Web Designer - imc marketing & consult</strong><br /><span className='experience-details'>Heidelberg, Germany | 02/2015 - 10/2019</span></p>
          <p>After being part of this digital agency for three years as a student, I started my full-time employment in October 2018.</p>
          <p>As a Web Developer and Designer I was responsible for planning and creating individual web design concepts for customers, usability testing, redesigning websites with improved UX and visual appearance, and creating websites using Wordpress and Joomla!</p>
        </Col>
        {/* <Col className='skills-on-side'>
          <p><strong>Front-End:</strong> React, JavaScript, HTML, CSS, Sass, Bootstrap<br />
          <strong>Backend:</strong> Node.js, Express, Python, Django<br />
          <strong>Databases:</strong> PostgreSQL, MongoDB, Mongoose<br />
          <strong>Version control and collaboration:</strong> GitHub, Git<br />
          <strong>Design and UI:</strong> Adobe Suite, Figma<br />
          <strong>Content Management Systems:</strong> Wordpress, Shopware<br />
          <strong>Project and time management:</strong> Trello, Slack<br />
          <strong>Currently learning:</strong> TypeScript</p>
        </Col> */}
        {/* <Skills /> */}
      </Row>
    </Container>
  )
}