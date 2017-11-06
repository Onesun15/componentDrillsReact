import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    console.log(props);
    return (
    <div className="contact">
            <div className="contact-photo">
              <img src={props.photo} alt={props.name}/>
            </div>
            <h2 className="contact-name ">
              {props.name} 
            </h2>
            <div className="contact-address">
              {props.address} 
            </div>
          </div>
    );
  };