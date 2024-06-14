"use client"

import { useEffect, useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';
import Contact from '../../models/Contact';
import axios from 'axios';

const Contacts = () => {

    let [contacts, setContacts] = useState<Contact[] | null>(null);

    let [errMsg, setErrMsg] = useState<string | null>(null);

    const apiEndPoint: string = "/api/contacts";

    const loadData = () => {
        axios.get(apiEndPoint)
            .then(resp => setContacts(resp.data))
            .catch(err => { console.error(err); setErrMsg("Unable to load data! Please try again later!"); })
    }

    useEffect(loadData, []);

    const addContact = (contact: Contact) => {
        axios.post(apiEndPoint, contact)
            .then(resp => loadData())
            .catch(err => { console.error(err); setErrMsg("Unable to save data! Please try again later!"); })
    };

    const deleteById = (id: number) => {
        axios.delete(apiEndPoint + "/" + id)
            .then(resp => loadData())
            .catch(err => { console.error(err); setErrMsg("Unable to delete data! Please try again later!"); })
    };

    const markEditable = (id: number) => {
        setContacts(contacts!.map(c => c.id != id ? c : { ...c, isEditable: true }));
    };

    const unmarkEditable = (id: number) => {
        setContacts(contacts!.map(c => c.id != id ? c : { ...c, isEditable: undefined }));
    };

    const updateContact = (contact: Contact) => {
        axios.put(apiEndPoint, contact)
            .then(resp => loadData())
            .catch(err => { console.error(err); setErrMsg("Unable to save data! Please try again later!"); })
    };

    return (
        <section className='col-sm-9 border border-primary p-4 mx-auto'>
            <h3>Contact List</h3>

            {!contacts && !errMsg && (
                <div className='alert alert-info p-4 fw-bold'>
                    Please wait while loading data...!
                </div>
            )}

            {errMsg && (
                <div className='alert alert-danger p-4 fw-bold'>
                    {errMsg}
                </div>
            )}

            <ContactsHeader />

            <ContactForm saveContact={addContact} />

            {contacts && contacts.map(c => (
                c.isEditable ?
                    <ContactForm key={c.id} c={c} saveContact={updateContact} unmarkEditable={unmarkEditable} /> :
                    <ContactRow key={c.id} c={c} deleteById={deleteById} markEditable={markEditable} />
            ))}

        </section>
    );
}

export default Contacts;