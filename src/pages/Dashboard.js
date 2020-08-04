import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  Row,
  Col,
  Card,
  Tab,
  Badge,
  Dropdown
} from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// Component
import Navbar from '../component/NavbarApp';
import Contact from '../component/ContactApp';
import Detail from '../component/DetailApp';


const data = [
  {
    date: '1 Jan',
    Facebook: 10,
    Instagram: 10,
    Telegram: 40,
  },
  {
    date: '2 Jan',
    Facebook: 60,
    Instagram: 30,
    Telegram: 30,
  },
  {
    date: '3 Jan',
    Facebook: 10,
    Instagram: 10,
    Telegram: 40,
  },
  {
    date: '4 Jan',
    Facebook: 60,
    Instagram: 30,
    Telegram: 30,
  }
];

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
                    <Row>
                      <Col lg={12} className="border-bottom pb-4">
                        <h4>CWC Journey</h4>
                        <Dropdown className="float-right">
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            January
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">February</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">March</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <LineChart
                          width={610}
                          height={420}
                          data={data}
                          margin={{
                            top: 30,
                            bottom: 50
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <YAxis />
                          <XAxis dataKey="date" />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="Instagram" stroke="#8884d8" />
                          <Line type="monotone" dataKey="Facebook" stroke="#82ca9d" />
                          <Line type="monotone" dataKey="Telegram" stroke="#ff3c00" />
                        </LineChart>
                      </Col>
                      <Col lg={12} className="py-4">
                        <h4>Tickets Journey</h4>
                        <div className="ticket mt-4">
                          <Card className="pb-0 mb-2 card-statistic">
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
                          <Card className="pb-0 mb-2 card-statistic">
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
                          <Card className="pb-0 mb-2 card-statistic">
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

                          <Card className="pb-0 mb-2 card-statistic">
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
                        </div>
                      </Col>
                    </Row>
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
