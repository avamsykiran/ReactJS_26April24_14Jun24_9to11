"use client"

import { useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';
import Contact from '../models/Contact';

const Contacts = () => {

    let [contacts, setContacts] = useState<Contact[]>([
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "Murthy", mobile: "9052224755", mailId: "murthy@gmail.com" },
        { id: 3, fullName: "Suresh", mobile: "9052224754", mailId: "suresh@gmail.com" },
        { id: 4, fullName: "Ramesh", mobile: "9052224751", mailId: "ramesh@gmail.com" },
        { id: 5, fullName: "Sagar", mobile: "9052224752", mailId: "sagar@gmail.com" }
    ]);

    let [nextContactId, setNextContactId] = useState<number>(6);

    const addContact = (contact: Contact) => {
        setContacts([...contacts, { ...contact, id: nextContactId }]);
        setNextContactId(nextContactId + 1);
    };

    const deleteById = (id: number) => {
        setContacts(contacts.filter(c => c.id != id));
    };

    const markEditable = (id: number) => {
        setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: true }));
    };

    const unmarkEditable = (id: number) => {
        setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }));
    };

    const updateContact = (contact: Contact) => {
        setContacts(contacts.map(c => c.id != contact.id ? c : { ...contact, isEditable: undefined }));
    };

    return (
        <section className='col-sm-9 border border-primary p-4 mx-auto'>
            <h3>Contact List</h3>

            <ContactsHeader />

            <ContactForm saveContact={addContact} />

            {contacts.map(c => (
                c.isEditable ?
                    <ContactForm key={c.id} c={c} saveContact={updateContact} unmarkEditable={unmarkEditable} /> :
                    <ContactRow key={c.id} c={c} deleteById={deleteById} markEditable={markEditable} />
            ))}

        </section>
    );
}

export default Contacts;