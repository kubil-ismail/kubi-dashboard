import React from 'react';
import { Table } from 'react-bootstrap';

export default function Customer(props) {
  let keys = [];
  for (var key in props.data) {
    keys.push(key);
  }
  return (
    <Table striped hover>
      <tbody>
        {keys.map((val, key) => (
          <tr key={key.toString()}>
            <td>{val.charAt(0).toUpperCase() + val.slice(1)}</td>
            <td><b>{props.data[val] || '-'}</b></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
