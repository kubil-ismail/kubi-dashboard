import React, { Component } from 'react';
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaHistory,
  FaUserAlt,
  FaVolumeUp,
  FaUserCircle,
  FaSearch,
} from 'react-icons/fa';

import {
  Navbar,
  Nav,
  FormControl,
  InputGroup,
  ListGroup,
  Dropdown,
  Image,
  Row,
  Col,
  Card,
  Tab,
  Button,
  Table
} from 'react-bootstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar bg="white" expand="lg" className="border-bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><FaTachometerAlt /> Dashboard</Nav.Link>
              <Nav.Link href="#link" className="mx-4"><FaTicketAlt /> Ticketing</Nav.Link>
              <Nav.Link href="#link"><FaHistory /> Log CWC</Nav.Link>
              <Nav.Link href="#link" className="mx-4"><FaUserAlt /> Customer</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Image
                src="https://avatars1.githubusercontent.com/u/49361887?s=48&v=4"
                width="60"
                height="60"
                roundedCircle
                className="nav-link"
              />
              <Dropdown className="nav-link">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  Bilkis Ismail
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link>
                <FaVolumeUp />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <section id="content" className="px-4">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              {/* COL 3 CONTACT LIST */}
              <Col lg={3} className="border border-left-0 py-5">
                {/* Form */}
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="search for cutomer"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/* List */}
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1">
                    <FaUserCircle />
                    Jimmy Jones
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    This one is a button
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              {/* COL 3 CONTACT INFO */}
              <Col sm={3} className="border py-5">
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h4 className="text-center">Jimmy Jones</h4>
                      <Button variant="success" className="mr-3">Email</Button>
                      <Button variant="success">Sms</Button>
                    <p className="font-weight-bold mt-4 text-left">CUSTUMER INFO</p>
                    <Table striped hover className="w-100">
                      <tbody>
                        <tr>
                          <td>Address</td>
                          <td><b>Jl Rs Fatmawati</b></td>
                        </tr>
                        <tr>
                          <td>Company</td>
                          <td><b>Pt Infomedia Nusantara</b></td>
                        </tr>
                        <tr>
                          <td>Hp</td>
                          <td><b>0897xxxxxxx</b></td>
                        </tr>
                        <tr>
                          <td>Phome</td>
                          <td><b>02134xxxxxx</b></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td><b>Jj@gmail.com</b></td>
                        </tr>
                        <tr>
                          <td>Facebook</td>
                          <td><b>-</b></td>
                        </tr>
                        <tr>
                          <td>Twitter</td>
                          <td><b>@Jjjon</b></td>
                        </tr>
                        <tr>
                          <td>Telegram</td>
                          <td><b>-</b></td>
                        </tr>
                        <tr>
                          <td>Instagram</td>
                          <td><b>-</b></td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row className="text-center">
                      <Col>
                        <h2>3</h2>
                        <p>Total CWC</p>
                      </Col>
                      <Col>
                        <h2>5</h2>
                        <p>Total CWC</p>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
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