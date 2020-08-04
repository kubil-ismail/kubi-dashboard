import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

// Import: Redux
import { connect } from 'react-redux';
import { fetchContact } from '../redux/actions/contactActions';

// Component
import Contact from './contact/Contact';
import Search from './contact/Search';

export class ContactApp extends Component {
  componentDidMount() {
    this.props.fetchContact();
  };
  
  render() {
    const { contact } = this.props.contact;
    return (
      <div className="h-100">
        {/* Form */}
        <Search />
        {/* List */}
        <ListGroup className="m-0 contact-list">
          {contact.length >= 1 && contact.map((val, key) => (
            <ListGroup.Item action key={key.toString()}>
              <Contact name={val.name} phone={val.phone} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = { fetchContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp);
