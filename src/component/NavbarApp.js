import React from 'react';
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaHistory,
  FaUserAlt,
  FaVolumeUp,
} from 'react-icons/fa';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';

export default function NavbarApp() {
  const menu = [
    { 
      url: '#home',
      name: 'Dashboard',
      icon: <FaTachometerAlt className="mr-2" />
    },
    {
      url: '#ticketing',
      name: 'Ticketing',
      icon: <FaTicketAlt className="mr-2" />
    },
    {
      url: '#log',
      name: 'Log CWC',
      icon: <FaHistory className="mr-2" />
    },
    {
      url: '#customer',
      name: 'Customer',
      icon: <FaUserAlt className="mr-2" />,
      active: true
    },
  ];
  const profile = [
    {
      name: 'Bilkis Ismail',
      id: '007',
      avatar: 'https://avatars1.githubusercontent.com/u/49361887?s=48&v=4'
    }
  ]
  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand className="d-lg-none">Kubi Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-center">
        <Nav className="mr-auto">
          {menu.map((val, key) => (
            <Nav.Link
              href={val.url}
              key={key.toString()}
              active={val.active}
              className="mx-2"
            >
              {val.icon}
              {val.name}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="ml-auto">
          <Image
            src={profile[0].avatar}
            width="60"
            height="60"
            roundedCircle
            fluid
            className="nav-link nav-img d-none d-lg-block"
          />
          <Dropdown className="nav-link">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              {profile[0].name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>ID : {profile[0].id}</Dropdown.Item>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider   />
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link>
            <FaVolumeUp className="nav-volume" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
