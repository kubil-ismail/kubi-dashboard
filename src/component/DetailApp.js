import React from 'react'
import { FaPen } from 'react-icons/fa';
import {
  Row,
  Col,
  Tab,
  Button,
} from 'react-bootstrap';

// Component
import Table from './detail/Customer';

export default function DetailApp() {
  const info = {
    address: 'Jl Rs Fatmawati',
    company: 'Pt Infomedia Nusantara',
    hp: '0808048304',
    phone: '093049304934',
    email: 'nasdkandkna@gmail.com',
    facebook: 'Ismail',
    twitter: 'sdsd',
    telegram: 'sadasd',
    instagram: 'smdsmdksd'
  };
  return (
    <Tab.Content>
      <Tab.Pane eventKey="#link1">
        <FaPen className="float-right" color="#5aad82" />
        <center>
          <h4 className="mb-4">Jimmy Jones</h4>
          <Button
            variant="success"
            size="sm"
            className="mr-3 px-4"
          >
            Email
          </Button>
          <Button
            variant="success"
            size="sm"
            className="px-4"
          >
            SMS
          </Button>
        </center>
        <p className="mt-4">CUSTOMER INFO</p>
        <Table data={info} />
        <Row className="text-center mt-4">
          <Col>
            <h2 className="font-weight-bold">3</h2>
            <p>Total CWC</p>
          </Col>
          <Col>
            <h2 className="font-weight-bold">5</h2>
            <p>Total CWC</p>
          </Col>
        </Row>
      </Tab.Pane>
    </Tab.Content>
  )
}
