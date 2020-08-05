import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// Component
import Contact from '../component/ContactApp';
import Detail from '../component/DetailApp';
import Statistic from '../component/StatisticApp';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <section id="content" className="px-4">
        <Row>
          {/* COL 3 CONTACT LIST */}
          <Col lg={3} className="border border-left-0 pt-5">
            <Contact />
          </Col>
          {/* COL 3 CONTACT INFO */}
          <Col sm={3} className="border py-lg-5">
            <Detail />
          </Col>
          {/* COL 6 CONTACT DETAIL */}
          <Col sm={6} className="border border-right-0 py-5">
            <Statistic />
          </Col>
        </Row>
        </section>
      </>
    );
  }
}
