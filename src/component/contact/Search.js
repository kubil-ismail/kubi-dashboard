import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormControl, InputGroup } from 'react-bootstrap';

// Import: Redux
import { connect } from 'react-redux';
import { fetchContact, searchContact } from '../../redux/actions/contactActions';


export class Search extends Component {
  onSearch = (e) => {
    this.props.searchContact(e.target.value);
  }

  render() {
    return (
      <InputGroup className="mb-3 search border m-0">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1" className="border-0 bg-white">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="border-0"
          placeholder="Search for customer"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => this.onSearch(e)}
          onEdi
        />
      </InputGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = { fetchContact, searchContact };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
