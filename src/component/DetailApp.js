import React, { Component } from 'react'
import { FaPen } from 'react-icons/fa';
import { Row, Col, Button } from 'react-bootstrap';

// Import: Redux
import { connect } from 'react-redux';
import { fetchContact } from '../redux/actions/contactActions';

// Component
import Table from './detail/Customer';

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

export class DetailApp extends Component {
  componentDidMount() {
    this.props.fetchContact();
  };

  render() {
    const { contact } = this.props.contact;
    return (
      <>
        <FaPen className="float-right" color="#5aad82" />
        <center>
          {contact.length >= 1 && (
            <h4 className="mb-4">{contact[0].name}</h4>
          )}
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
        <Table data={contact[0]} />
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = { fetchContact };

export default connect(mapStateToProps, mapDispatchToProps)(DetailApp);
