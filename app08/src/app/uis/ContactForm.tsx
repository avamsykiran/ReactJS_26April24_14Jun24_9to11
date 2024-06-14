"use client"

import { useState } from 'react';
import Contact from '../../models/Contact';

interface ContactFormProps {
    c?: Contact;
    unmarkEditable?: (id: number) => void;
    saveContact: (c: Contact) => void;
}

const ContactForm = ({ c, unmarkEditable, saveContact }: ContactFormProps) => {

    let [id, setId] = useState<number>(c ? c.id : 0);
    let [fullName, setFullName] = useState<string>(c ? c.fullName : "");
    let [mobile, setMobile] = useState<string>(c ? c.mobile : "");
    let [mailId, setMailId] = useState<string>(c ? c.mailId : "");

    const reset = () => {
        setId(0);
        setFullName("");
        setMailId("");
        setMobile("");
    }

    const save = () => {
        saveContact({ id, fullName, mobile, mailId });
        reset();
    }

    const cancel = () => {
        unmarkEditable ? unmarkEditable(id) : reset();
    }

    return (
        <form className='row p-2 border-bottom' onSubmit={e => { e.preventDefault(); save(); }}>
            <div className='col-1 text-end'>
                <input type="number" value={id} className='form-control' readOnly={true} />
            </div>
            <div className='col text-start'>
                <input type="text" value={fullName} className='form-control'
                    onChange={e => setFullName(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" value={mobile} className='form-control'
                    onChange={e => setMobile(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="email" value={mailId} className='form-control'
                    onChange={e => setMailId(e.target.value)} />
            </div>
            <div className='col-2 text-center'>
                <button className='btn btn-sm btn-primary' >
                    SAVE
                </button>
                <button className='btn btn-sm btn-danger ms-1' type="button" onClick={e => cancel()}>
                    CANCEL
                </button>
            </div>
        </form>
    );
}

export default ContactForm;