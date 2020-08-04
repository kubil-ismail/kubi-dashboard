import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  Row,
  Col,
  Card,
  Tab,
  Badge
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
                    <h4>Tickets Journey</h4>
                    <Card className="pb-0 card-statistic">
                      <Card.Body>
                        <Card.Text>
                          <Row>
                            <Col lg={1} className="d-flex align-items-center">
                              <div>
                                <FaUserCircle className="user-circle mb-2" />
                              </div>
                            </Col>
                            <Col lg={7} className="pl-4 d-flex align-items-center">
                              <div>
                                <p className="m-0">123455 - Bilkis Ismail</p>
                                <p className="font-weight-bold">Kartu Hilang</p>
                              </div>
                            </Col>
                            <Col lg={4} className="text-right">
                              <Badge variant="primary">On Progress</Badge>
                              <p className="font-weight-bold m-0">30 Novermber 2020</p>
                              <small>10:10:09</small>
                            </Col>
                          </Row>
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
