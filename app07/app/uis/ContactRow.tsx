"use client"

import Contact from "../models/Contact";

interface ContactRowProps{
    c : Contact;
    deleteById: (id:number) => void;
    markEditable: (id:number) => void;
}

const ContactRow = ({ c, deleteById,markEditable }:ContactRowProps) => (
    <div className='row p-2 border-bottom text-center'>
        <div className='col-1 text-end'>{c.id}</div>
        <div className='col text-start'>{c.fullName}</div>
        <div className='col-2'>{c.mobile}</div>
        <div className='col-2'>{c.mailId}</div>
        <div className='col-2'>
            <button
                type='button'
                className='btn btn-sm btn-secondary me-1'
                onClick={event => markEditable(c.id)}>
                EDIT
            </button>
            <button
                type='button'
                className='btn btn-sm btn-danger'
                onClick={event => deleteById(c.id)}>
                DELETE
            </button>
        </div>
    </div>
);

export default ContactRow;