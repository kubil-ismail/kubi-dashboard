import React, { Component } from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap';

// Import: Redux
import { connect } from 'react-redux';
import { fetchContact } from '../redux/actions/contactActions';

// Component
import Ticket from './statistic/Ticket';
import Chart from './statistic/Chart';

export class StatisticApp extends Component {
  componentDidMount() {
    this.props.fetchContact();
  };
  render() {
    const { ticket, charts } = this.props.contact;
    return (
      <Row>
        <Col lg={12} className="border-bottom pb-4">
          <h4>CWC Journey</h4>
          <Dropdown className="float-right">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              January
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">February</Dropdown.Item>
              <Dropdown.Item href="#/action-2">March</Dropdown.Item>
              <Dropdown.Item href="#/action-3">April</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Chart data={charts} />
        </Col>
        <Col lg={12} className="py-4">
          <h4>Tickets Journey</h4>
          <div className="ticket mt-4">
            {ticket.length >= 1 && ticket.map((val, key) => (
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
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = { fetchContact };

export default connect(mapStateToProps, mapDispatchToProps)(StatisticApp);

