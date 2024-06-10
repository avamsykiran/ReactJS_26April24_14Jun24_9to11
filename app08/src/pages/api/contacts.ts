import { addContact, getAllContacts, updateContact } from "@/lib/ContactsService";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        if (req.method === 'GET') {
            let contacts = await getAllContacts();
            res.status(200).json(contacts);
        } else if (req.method === 'POST') {
            let contact = { ...req.body };
            contact = await addContact(contact);
            res.status(201).json(contact);
        } else if (req.method === 'PUT') {
            let contact = { ...req.body };
            contact = await updateContact(contact);
            res.status(202).json(contact);
        } else {
            res.status(400).json({ 'error': 'the ent method is not supported' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'error': 'something went wrong on the server.' });
    }
}

export default handler;