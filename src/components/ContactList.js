import React from 'react';
import '../css/contactlist.css'

function ContactList({ contacts }) {
    return (
        <ol>
            {contacts.map((contact) => (
                <li key={contact.id} className="contact-item">
                    <div className='details-container'>
                        <div className='contact-image'>

                        </div>

                        <div className='contact-info'>

                        </div>
                    </div>
                    <button></button>

                </li>
            ))}
        </ol>
    )
}

export default ContactList