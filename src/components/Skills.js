// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Skills() {
  return (
    <Container className='container-skills' fluid id='Skills'>
     <Container>
     <h3>Software Skills</h3>
      <Row className='mt-5'>
          <Col className='container-icons' md='1'>
            <i class="devicon-react-original"></i>
            <p>React</p>
          </Col>
          <Col className='container-icons' md='1'>
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </Col>
          <Col className='container-icons' md='1'>
            <i class="devicon-html5-plain"></i>
            <p>HTML5</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-css3-plain"></i>
              <p>CSS</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-sass-original"></i>
              <p>Sass</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-bootstrap-plain"></i>
              <p>Bootstrap</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-nodejs-plain"></i>
              <p>Node.js</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-nextjs-original"></i>
              <p>Next.js</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-express-original"></i>
              <p>Express</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-python-plain"></i>
              <p>Python</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-django-plain"></i>
              <p>Django</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-mongodb-plain"></i>
              <p>MongoDB</p>
          </Col>
      </Row>
      <Row className='mb-5'>
          <Col className='container-icons' md='1'>
          <i class="devicon-postgresql-plain"></i>
              <p>PostgreSQL</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-mongodb-plain"></i>
              <p>Mongoose</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-typescript-plain"></i>
              <p>TypeScript</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-github-original"></i>
              <p>GitHub</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-git-plain"></i>
              <p>Git</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-xd-plain"></i>
              <p>Adobe XD</p>
          </Col>
          <Col className='container-icons' md='1'>
            <i class="devicon-photoshop-plain"></i>
              <p>Photoshop</p>
          </Col>
          <Col className='container-icons' md='1'>
            <i class="devicon-illustrator-plain"></i>
              <p>Illustrator</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-figma-plain"></i>
            <p>Figma</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-wordpress-plain"></i>
            <p>Wordpress</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-shopware-original"></i>
            <p>Shopware</p>
          </Col>
          <Col className='container-icons' md='1'>
          <i class="devicon-trello-plain"></i>
            <p>Trello</p>
          </Col>
      </Row>
      <h5 className='mt-5'>Business skills</h5>
      <Row className='container-soft-skills'>
        <Col md='3'><p><strong>Adaptability</strong><br />open to change,<br />quick learning</p></Col>
        <Col md='3'><p><strong>Creativity</strong><br />finding innovative solutions,<br />improving UI</p></Col>
        <Col md='3'><p><strong>Problem-solving</strong><br />working w/ new technologies,<br />debugging code</p></Col>
        <Col md='3'><p><strong>Time management</strong><br />meeting deadlines,<br />prioritizing tasks</p></Col>
      </Row>
     </Container>
     {/* <Container>
      <Row>
        <Col md='5' className='skills-on-side'>
          <p><strong>Front-End:</strong> React, JavaScript, HTML, CSS, Sass, Bootstrap</p>
          <p><strong>Backend:</strong> Node.js, Express, Python, Django</p>
          <p><strong>Databases:</strong> PostgreSQL, MongoDB, Mongoose</p>
          <p><strong>Version control and collaboration:</strong> GitHub, Git</p>
          <p><strong>Design and UI:</strong> Adobe Suite, Figma</p>
          <p><strong>Content Management Systems:</strong> Wordpress, Shopware</p>
          <p><strong>Project and time management:</strong> Trello, Slack</p>
          <p><strong>Currently learning:</strong> TypeScript</p>
        </Col>
      </Row>
     </Container> */}
    </Container>
  )
}