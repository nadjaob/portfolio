// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Nav from './Nav'


export default function Header() {
  return (
    <header>
      <Nav />
      <Container>
        <Row>
          <Col>
            <h1>Hi I'm Nadja</h1>
            <h2>A Full Stack Developer from Germany</h2>
          </Col>
        </Row>
      </Container>
    </header>
  )
}