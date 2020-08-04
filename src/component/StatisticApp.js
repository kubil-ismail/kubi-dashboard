import React from 'react';
import { Row, Col, Tab, Dropdown } from 'react-bootstrap';

// Component
import Ticket from './statistic/Ticket';
import Chart from './statistic/Chart';

const ticket = [
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
  {
    id: 123456,
    name: 'Bilkis Ismail',
    desc: 'Kartu Hilang',
    date: '30 November 2020',
    time: '23:12:00',
    status: 'On Progress'
  },
];

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

export default function StatisticApp() {
  return (
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
            <Chart data={data} />
          </Col>
          <Col lg={12} className="py-4">
            <h4>Tickets Journey</h4>
            <div className="ticket mt-4">
              {ticket.map((val, key) => (
                <Ticket
                  key={key}
                  id={val.id}
                  name={val.name}
                  desc={val.desc}
                  status={val.status}
                  date={val.time}
                  time={val.time}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Tab.Pane>
    </Tab.Content>
  )
}
