import React, { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
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
  ButtonGroup,
  Table
} from 'react-bootstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar bg="white" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><FaBeer /> Dashboard</Nav.Link>
              <Nav.Link href="#link" className="mx-4">Ticketing</Nav.Link>
              <Nav.Link href="#link">Log CWC</Nav.Link>
              <Nav.Link href="#link" className="mx-4">Customer</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Image
                src="https://avatars1.githubusercontent.com/u/49361887?s=48&v=4"
                width="50"
                height="50"
                roundedCircle
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <section id="content" className="px-4">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              {/* COL 3 CONTACT LIST */}
              <Col lg={3}>
                {/* Form */}
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
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
              <Col sm={3}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h4 className="text-center">Jimmy Jones</h4>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="success" className="mr-3">Email</Button>
                      <Button variant="success">Sms</Button>
                    </ButtonGroup>
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
              <Col sm={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h4>CWC Journey</h4>
                    <h4>Tickets Journey</h4>
                    <Card>
                      <Card.Body>
                        <Card.Title> Card Title </Card.Title>
                        <Card.Text>
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
