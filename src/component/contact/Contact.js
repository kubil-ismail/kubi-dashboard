import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

export default function Contact(props) {
  return (
    <Row>
      <Col xs={3} lg={3}>
        <FaUserCircle className="user-circle" />
      </Col>
      <Col>
        <p className="m-0 font-weight-bold">{props.name}</p>
        <small>{props.phone}</small>
      </Col>
    </Row>
  );
}
