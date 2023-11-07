// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// IMAGES
// import me from '../images/nad-square.jpg'

// import Skills from './Skills'


export default function About() {
  return (
    <>
    <Container className='container-about' id='About'>
      <Row className='container-about-row'>
        <h3>About</h3>
        <Col md='6' className='about-col-left'>
          <p>I am Nadja, a full stack developer from Germany currently based in Sydney.</p>
          <p>My passion for web development was sparked when I was working as a <strong>web designer</strong> for a digital agency, where I learned the importance of <strong>usability</strong> and delivering an exceptional <strong>user experience</strong>.</p>
          <p>Due to my growing interest in technology it has been a natural next step to master the art of building and maintaining web applications from scratch.</p>
        </Col>
        <Col md='6' className='about-col-right'>
          <p>Since graduating from a 12-week immersive software engineering course, I have been enjoying all the challenges that programming brings.</p>
          <p>It allows me to constantly <strong>learn new skills</strong>, combine my <strong>creativity with analytical problem-solving</strong> and to bring a <strong>broad perspective</strong> to every project.</p>
          <p>Now I am excited to further develop my knowledge and move into a <strong>Junior developer</strong> role where I can utilize my abilities to their fullest potential.</p>
        </Col>
      </Row>
    </Container>
    <Container className='container-interests'>
      <Row>
        <h4>Interests</h4>
        <Col><p><strong>Backpacking</strong><br />While travelling I have spent more nights in a bunk bed than in a private room. I love languages, meeting people from all over the world and broaden my horizon - all of this while discovering beautiful places!</p></Col>
        <Col><p><strong>Ukulele</strong><br />I am a passionate self-taught ukulele player and keep improving my skills through online tutorials. It brings me joy to sing along even though I am aware that my vocal abilities may not be as polished as some..</p></Col>
        <Col><p><strong>Snowboarding</strong><br />I have been enjoying winter sports since I was a kid and this is probably what I miss most about Europe. Incredible mountain views, physical challenges and the thrill of riding downhill is just amazing!</p></Col>
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