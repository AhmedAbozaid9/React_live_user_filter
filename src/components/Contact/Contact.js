import React from 'react'

import "./Contact.css"

function Contact({contact}) {
  return (
    <div className='contact'>
      <img src={contact.picture.large} alt= {contact.name.first} />
      <div className="user-info">
        <h4>{contact.name.first} {contact.name.last}</h4>
        <p>{contact.location.city}, {contact.location.country}</p>
      </div>
    </div>
  )
}

export default Contact