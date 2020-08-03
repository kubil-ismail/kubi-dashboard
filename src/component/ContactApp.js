import React from 'react';
import { ListGroup } from 'react-bootstrap';

// Component
import Contact from './contact/Contact';
import Search from './contact/Search';

export default function ContactApp() {
  const contact = [
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link1'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link2'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link3'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link4'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link5'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link6'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link1'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link2'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link3'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link4'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link5'
    },
    {
      name: 'Bilkis Ismail',
      phone: '0896300xxxx',
      url: '#link6'
    },
  ];

  return (
    <div className="h-100">
      {/* Form */}
      <Search />
      {/* List */}
      <ListGroup defaultActiveKey="#link1" className="m-0 contact-list">
        {contact.map((val, key) => (
          <ListGroup.Item action href={val.url} key={key.toString()}>
            <Contact name={val.name} phone={val.phone} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
