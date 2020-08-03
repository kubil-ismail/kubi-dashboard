import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FormControl, InputGroup } from 'react-bootstrap';

export default function Search() {
  return (
    <InputGroup className="mb-3 search border m-0">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1" className="border-0 bg-white">
          <FaSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        className="border-0"
        placeholder="Search for cutomer"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}
