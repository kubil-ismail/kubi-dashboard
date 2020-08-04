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
        <h5 className="m-0">
          <b>{props.name}</b>
        </h5>
        <small>{props.phone}</small>
      </Col>
    </Row>
  );
}
