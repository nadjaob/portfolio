// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function About() {
  return (
    <Container className='container-about'>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <h3 id='#about'>About me</h3>
          <p>My passion for web development was sparked when I was working for a digital agency as a designer, which taught me the importance of delivering an exceptional <strong>user experience</strong>.</p>
          <p>I transitioned to a career in software engineering due to my growing passion for technology and all the challenges that programming brings. It allows me to constantly <strong>learn new skills</strong>, combine my <strong>creativity with analytical problem-solving</strong> and to bring a <strong>broad perspective</strong> to every project.</p>
          <p>Now I am excited to further develop my knowledge and move into a <strong>Junior developer</strong> role where I can utilize my abilities to their fullest potential.</p>
        </Col>
      </Row>
    </Container>
  )
}