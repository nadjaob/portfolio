import { Link } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// IMAGES
import bucketlist from '../images/bucket-list-image.png'


export default function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Projects</h3>
          <Tabs
              defaultActiveKey='project-1'
              transition={false}
              // id='noanim-tab-example'
              className='mb-3'
            >
              <Tab eventKey='project-1' title='BUCKET LIST'>
                <Row className='container-projects'>
                  <Col className='container-image'>
                    <div className='container-project-image'>
                      <img src={bucketlist} alt='bucket list' className='project-image' />
                      <div className='project-image-border'></div>
                    </div>
                  </Col>
                  <Col>
                    <p>A social media platform where users can add travel destinations to their personal bucket lists, view profile pages and invite friends to add destinations to their list.</p>
                    <p>The <strong>full stack application</strong> is based on a React front-end and Django backend. The data is served from a Postgres database containing multiple relationships and CRUD functionality.</p>
                    <p className='project-skills'>React - JavaScript - Bootstrap - Sass - Django - Python - PostgreSQL - Git - Github - Figma - Trello</p>
                    <div className='two-buttons'>
                      <Link className='button-transparent' to='https://github.com/nadjaob/bucket-list' target='_blank'>Read me</Link>
                      <Link className='button-color' to='https://bucket-list-c3f4527a7512.herokuapp.com/' target='_blank'>Live</Link>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='project-2' title='GOURMET GOSSIP'>
                <Row>
                  <Col></Col>
                </Row>
              </Tab>
              <Tab eventKey='project-3' title='CAN I WEAR SHORT PANTS?'>
                <Row>
                  <Col></Col>
                </Row>
              </Tab>
              <Tab eventKey='project-4' title='PACMAN'>
                <Row>
                  <Col></Col>
                </Row>
              </Tab>
            </Tabs>
        </Col>
      </Row>
    </Container>
  )
}