'use server'

import Contact from "@/models/Contact";

let contacts: Contact[] = [
    { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
    { id: 2, fullName: "Murthy", mobile: "9052224755", mailId: "murthy@gmail.com" }
];

let nextContactId = 3;

export const addContact = async (contact: Contact) => {
    contact = { ...contact, id: nextContactId }
    contacts = [...contacts, contact];
    nextContactId= nextContactId + 1;
    return contact;
};

export const deleteContactById = async (id: number) => {
    contacts = contacts.filter(c => c.id != id);
};

export const updateContact = async (contact: Contact) => {
    contact = { ...contact, isEditable: undefined };
    contacts = contacts.map(c => c.id != contact.id ? c : contact);
    return contact;
};

export const getAllContacts = async () => [...contacts];

export const getContactById = async (id:number) => contacts.find(c => c.id===id); 

