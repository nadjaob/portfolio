import { Link } from 'react-router-dom'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Tab from 'react-bootstrap/Tab'
// import Tabs from 'react-bootstrap/Tabs'

// IMAGES
import bucketlist from '../images/macbook-bucket-list.png'
import gourmetgossip from '../images/macbook-gourmet-gossip.png'
import pacman from '../images/macbook-pacman.png'
import weatherapp from '../images/macbook-weather-app.png'



export default function Projects() {
  return (
    <Container id='Projects'>
      <div className='container-each-project'>
        <h4>Bucket List</h4>
        <Row className='container-projects'>
          <Col className='container-image' lg='7'>
            <div className='container-project-image'>
              <img src={bucketlist} alt='bucket list' className='project-image' />
            </div>
          </Col>
          <Col className='container-project-details' lg='5'>
            <p>A social media platform where users can add travel destinations to their personal bucket lists, view profile pages and invite friends to add destinations to their list.</p>
            <p>The <strong>full stack application</strong> is based on a React front-end and Django backend. The data is served from a Postgres database containing multiple relationships and CRUD functionality.</p>
            <p className='project-skills'>React - JavaScript - Bootstrap - Sass - Django - Python - PostgreSQL - Git - Github - Figma - Trello</p>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob/bucket-list' target='_blank'>Read me</Link>
              <Link className='button-color' to='https://bucket-list-c3f4527a7512.herokuapp.com/' target='_blank'>Live</Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className='container-each-project'>
        <h4>Gourmet Gossip</h4>
        <Row className='container-projects'>
          <Col className='container-image' lg='7'>
            <div className='container-project-image'>
              <img src={gourmetgossip} alt='gourmet gossip' className='project-image' />
            </div>
          </Col>
          <Col className='container-project-details' lg='5'>
            <p>A recipe sharing application based on a <strong>React front-end</strong>, <strong>Node back-end</strong>, a fully functional <strong>Express API (CRUD)</strong> and custom authentication for login and register.</p>
            <p>Focusing on the front-end I implemented a dynamic changeable form to create and update recipes, the search and filter function and the comment function.</p>
            <p className='project-skills'>React - JavaScript - Bootstrap - Sass - Node.js - Express - MongoDB - Mongoose - Git - Github - Figma - Trello</p>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob/gourmet-gossip' target='_blank'>Read me</Link>
              <Link className='button-color' to='https://gourmetgossip-c203cdaf4c83.herokuapp.com/' target='_blank'>Live</Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className='container-each-project'>
        <h4>Can I wear short pants?</h4>
        <Row className='container-projects'>
          <Col className='container-image' lg='7'>
            <div className='container-project-image'>
              <img src={weatherapp} alt='weather app' className='project-image' />
            </div>
          </Col>
          <Col className='container-project-details' lg='5'>
            <p>A <strong>React-based front-end application</strong> that uses the Visual Crossing weather API to retrieve data about the temperature, weather, humidity and a time and place specified by the user.</p>
            <p>Based on this information the application displays a response to the question "Can I wear short pants?".</p>
            <p className='project-skills'>React - JavaScript - Sass - Node.js - Express - Git - GitHub - Visual crossing weather API - Netlify</p>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob/weather-app' target='_blank'>Read me</Link>
              <Link className='button-color' to='https://can-i-wear-short-pants.netlify.app/' target='_blank'>Live</Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className='container-each-project'>
        <h4>Pacman</h4>
        <Row className='container-projects'>
          <Col className='container-image' lg='7'>
            <div className='container-project-image'>
              <img src={pacman} alt='pacman' className='project-image' />
              <source src='videos/pacman-video.mov'></source>
            </div>
          </Col>
          <Col className='container-project-details' lg='5'>
            <p>A unique version of pacman based on a 21x21 grid.</p>
            <p>In this first project I cemented my <strong>JavaScript</strong> fundamental skills and became more familiar with creating algorithms and using <strong>HTML and CSS</strong>.</p>
            <p className='project-skills'>HTML - CSS - JavaScript</p>
            <div className='two-buttons'>
              <Link className='button-transparent' to='https://github.com/nadjaob/pacman' target='_blank'>Read me</Link>
              <Link className='button-color' to='https://nadjaob.github.io/pacman/' target='_blank'>Live</Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* <Tabs
          defaultActiveKey='project-1'
          transition={false}
          // id='noanim-tab-example'
          className='mb-3'
        >
          <Tab eventKey='project-1' title='BUCKET LIST'>
            <Row className='container-projects'>
              <Col className='container-image' lg='7'>
                <div className='container-project-image'>
                  <img src={bucketlist} alt='bucket list' className='project-image' />
                </div>
              </Col>
              <Col className='container-project-details' lg='5'>
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
          <Row className='container-projects'>
              <Col className='container-image' md='7'>
                <div className='container-project-image'>
                  <img src={gourmetgossip} alt='gourmet gossip' className='project-image' />
                </div>
              </Col>
              <Col className='container-project-details' md='5'>
                <p>A recipe sharing application based on a <strong>React front-end</strong>, <strong>Node back-end</strong>, a fully functional <strong>Express API (CRUD)</strong> and custom authentication for login and register.</p>
                <p>Focusing on the front-end I implemented a dynamic changeable form to create and update recipes, the search and filter function and the comment function.</p>
                <p className='project-skills'>React - JavaScript - Bootstrap - Sass - Node.js - Express - MongoDB - Mongoose - Git - Github - Figma - Trello</p>
                <div className='two-buttons'>
                  <Link className='button-transparent' to='https://github.com/nadjaob/gourmet-gossip' target='_blank'>Read me</Link>
                  <Link className='button-color' to='https://gourmetgossip-c203cdaf4c83.herokuapp.com/' target='_blank'>Live</Link>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey='project-3' title='CAN I WEAR SHORT PANTS?'>
          <Row className='container-projects'>
              <Col className='container-image' md='7'>
                <div className='container-project-image'>
                  <img src={weatherapp} alt='weather app' className='project-image' />
                </div>
              </Col>
              <Col className='container-project-details' md='5'>
                <p>A <strong>React-based front-end application</strong> that uses the Visual Crossing weather API to retrieve data about the temperature, weather, humidity and a time and place specified by the user. Based on this information the application displays a response to the question "Can I wear short pants?".</p>
                <p className='project-skills'>React - JavaScript - Sass - Node.js - Express - Git - GitHub - Visual crossing weather API - Netlify</p>
                <div className='two-buttons'>
                  <Link className='button-transparent' to='https://github.com/nadjaob/weather-app' target='_blank'>Read me</Link>
                  <Link className='button-color' to='https://can-i-wear-short-pants.netlify.app/' target='_blank'>Live</Link>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey='project-4' title='PACMAN'>
          <Row className='container-projects'>
              <Col className='container-image' md='7'>
                <div className='container-project-image'>
                  <img src={pacman} alt='pacman' className='project-image' />
                  <source src='videos/pacman-video.mov'></source>
                </div>
              </Col>
              <Col className='container-project-details' md='5'>
                <p>A unique version of pacman based on a 21x21 grid.</p>
                <p>In this first project I cemented my <strong>JavaScript</strong> fundamental skills and became more familiar with creating algorithms and using <strong>HTML and CSS</strong>.</p>
                <p className='project-skills'>HTML - CSS - JavaScript</p>
                <div className='two-buttons'>
                  <Link className='button-transparent' to='https://github.com/nadjaob/pacman' target='_blank'>Read me</Link>
                  <Link className='button-color' to='https://nadjaob.github.io/pacman/' target='_blank'>Live</Link>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs> */}
    </Container>
  )
}