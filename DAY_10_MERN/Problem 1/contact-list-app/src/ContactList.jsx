import React, { useState } from 'react';
import './ContactList.css';

function ContactList() {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Cristiano Ronaldo', email: 'cristiano.ronaldo@example.com' },
        { id: 2, name: 'Lionel Messi', email: 'lionel.messi@example.com' },
        { id: 3, name: 'Neymar Jr.', email: 'neymar.jr@example.com' },
        { id: 4, name: 'Robert Lewandowski', email: 'robert.lewandowski@example.com' },
        { id: 5, name: 'Kylian Mbappé', email: 'kylian.mbappe@example.com' }
    ]);

    const [newContact, setNewContact] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleAddContact = (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page
        if (newContact.name && newContact.email) {
            const id = contacts.length + 1; // Generate unique ID
            setContacts([...contacts, { id, ...newContact }]);
            setNewContact({ name: '', email: '' }); // Clear input fields
        }
    };

    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            <form onSubmit={handleAddContact} className="add-contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newContact.name}
                    onChange={handleInputChange}
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newContact.email}
                    onChange={handleInputChange}
                    className="input-field"
                />
                <button type="submit" className="add-contact-btn">Add Contact</button>
            </form>
            <table className="contact-table">
                <thead>
                    <tr>
                        <th>SR No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
