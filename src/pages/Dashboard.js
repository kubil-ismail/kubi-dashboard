import React, { Component } from 'react';
import { FaSearch, FaPen } from 'react-icons/fa';
import {
  Row,
  Col,
  Card,
  Tab,
  Button,
  Table
} from 'react-bootstrap';

// Component
import Navbar from '../component/NavbarApp';
import Contact from '../component/ContactApp';
import Detail from '../component/DetailApp';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="content" className="px-4">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              {/* COL 3 CONTACT LIST */}
              <Col lg={3} className="border border-left-0 py-5">
                <Contact />
              </Col>
              {/* COL 3 CONTACT INFO */}
              <Col sm={3} className="border py-5">
                <Detail />
              </Col>
              {/* COL 6 CONTACT DETAIL */}
              <Col sm={6} className="border border-right-0 py-5">
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h4>CWC Journey</h4>
                    <h4>Tickets Journey</h4>
                    <Card>
                      <Card.Body>
                        <Card.Text>
                          <FaSearch />
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </section>
      </>
    );
  }
}
