import { addContact, deleteContactById, getAllContacts, getContactById, updateContact } from "@/lib/ContactsService";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    let {params} = req.query;

    try {
        if (req.method === 'GET') {
            if(params && params!.length>0){
                let id = params![0];
                let contact = await getContactById(Number(id));
                if(contact) {
                    res.status(200).json(contact);
                }else{
                    res.status(404).send('No Such Contact Found');
                }
            }else{
                let contacts = await getAllContacts();
                res.status(200).json(contacts);
            }            
        } else if (req.method === 'POST') {
            let contact = { ...req.body };
            contact = await addContact(contact);
            res.status(201).json(contact);
        } else if (req.method === 'PUT') {
            let contact = { ...req.body };
            contact = await updateContact(contact);
            res.status(202).json(contact);
        } else if (req.method === 'DELETE') {
            if(params && params!.length>0){
                let id = params![0];
                await deleteContactById(Number(id));
                res.status(200).send('');
            }else{
                res.status(400).json({'error':'contact id is required to delete.'});
            }
        }else {
            res.status(400).json({ 'error': 'the sent method is not supported' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'error': 'something went wrong on the server.' });
    }
}

export default handler;