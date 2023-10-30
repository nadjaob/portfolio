// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// IMAGES
// import me from '../images/nad-square.jpg'


export default function About() {
  return (
    <>
    <Container className='container-about' id='About'>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3>About</h3>
          <p>I am Nadja, a full stack developer from Germany and currently based in Sydney.</p>
          <p>My passion for web development was sparked when I was working for a digital agency as a designer, which taught me the importance of delivering an exceptional <strong>user experience</strong>.</p>
          <p>I transitioned to a career in software engineering due to my growing passion for technology and all the challenges that programming brings. It allows me to constantly <strong>learn new skills</strong>, combine my <strong>creativity with analytical problem-solving</strong> and to bring a <strong>broad perspective</strong> to every project.</p>
          <p>Now I am excited to further develop my knowledge and move into a <strong>Junior developer</strong> role where I can utilize my abilities to their fullest potential.</p>
        </Col>
        {/* <Col md='5'>
          <img src={me} alt='This is me, Nadja.'/>
        </Col> */}
      </Row>
    </Container>
    {/* <Container>
      <Row>
        <Col md='7'>
          <h3>About</h3>
          <p>My passion for web development was sparked when I was working for a digital agency as a designer, which taught me the importance of delivering an exceptional <strong>user experience</strong>.</p>
          <p>I transitioned to a career in software engineering due to my growing passion for technology and all the challenges that programming brings. It allows me to constantly <strong>learn new skills</strong>, combine my <strong>creativity with analytical problem-solving</strong> and to bring a <strong>broad perspective</strong> to every project.</p>
          <p>Now I am excited to further develop my knowledge and move into a <strong>Junior developer</strong> role where I can utilize my abilities to their fullest potential.</p>
        </Col>
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
    </>
  )
}