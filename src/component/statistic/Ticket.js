import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  Row,
  Col,
  Card,
  Badge,
} from 'react-bootstrap';

export default function Ticket(props) {
  return (
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
                <p className="m-0">
                  <span>{props.id}</span>
                  <span> - </span>
                  <span>{props.name}</span>
                </p>
                <p className="font-weight-bold">{props.desc}</p>
              </div>
            </Col>
            <Col lg={4} className="text-right">
              <Badge variant="primary">{props.status}</Badge>
              <p className="m-0">
                <b>{props.date}</b>
              </p>
              <small>{props.time}</small>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
