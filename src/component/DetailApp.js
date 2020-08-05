import React, { Component } from 'react'
import { FaPen } from 'react-icons/fa';
import { Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

// Import: Redux
import { connect } from 'react-redux';
import { fetchContact } from '../redux/actions/contactActions';

// Component
import Table from './detail/Customer';

export class DetailApp extends Component {
  componentDidMount() {
    this.props.fetchContact();
  };

  showAlert = () => {
    Swal.fire({
      title: 'Kirim Pesan',
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: 'Pesan berhasil dikirim',
          icon: 'success' 
        })
      }
    })
  }

  showEdit = () => {
    const { detail } = this.props.contact;
    const { value: formValues } = Swal.fire({
      title: 'Edit Customer',
      html:
        `<input id="swal-input1" class="swal2-input" value="${detail.name}" placeholder="Name" />` +
        `<input id="swal-input2" class="swal2-input" value="${detail.email}" placeholder="Email" />` +
        `<input id="swal-input5" class="swal2-input" value="${detail.phone}" placeholder="Phone Number" />` +
        `<input id="swal-input4" class="swal2-input" value="${detail.company}" placeholder="Compant" />` +
        `<input id="swal-input3" class="swal2-input" value="${detail.address}" placeholder="Address" />`
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

  render() {
    const { detail } = this.props.contact;
    return (
      <>
        {/* Edit User */}
        <FaPen
          className="float-right"
          color="#5aad82"
          onClick={() => this.showEdit()}
        />
        <center>
          <h4 className="mb-4">{detail.name}</h4>
          <Button
            variant="success"
            size="sm"
            className="mr-3 px-4"
            onClick={() => this.showAlert()}
          >
            Email
          </Button>
          <Button
            variant="success"
            size="sm"
            className="px-4"
            onClick={() => this.showAlert()}
          >
            SMS
          </Button>
        </center>
        <p className="mt-4">
          <b>CUSTOMER INFO</b>
        </p>
        {/* Table Data */}
        <Table data={detail} />
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
