import { Component } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';
import Contact from '../models/Contact';

interface ContactsProps {
}

interface ContactsState {
    contacts:Contact[];
    nextContactId:number;
}

class Contacts extends Component<ContactsProps,ContactsState> {
    constructor(props:ContactsProps) {
        super(props);
        this.state = {
            contacts: [
                { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
                { id: 2, fullName: "Murthy", mobile: "9052224755", mailId: "murthy@gmail.com" },
                { id: 3, fullName: "Suresh", mobile: "9052224754", mailId: "suresh@gmail.com" },
                { id: 4, fullName: "Ramesh", mobile: "9052224751", mailId: "ramesh@gmail.com" },
                { id: 5, fullName: "Sagar", mobile: "9052224752", mailId: "sagar@gmail.com" }
            ],
            nextContactId: 6
        };
    }

    addContact = (contact:Contact) => {
        this.setState({
            contacts: [...this.state.contacts, { ...contact, id: this.state.nextContactId }],
            nextContactId: this.state.nextContactId + 1
        });
    };

    deleteById = (id:number) => {
        this.setState({ contacts: this.state.contacts.filter(c => c.id != id) });
    };

    markEditable = (id:number) => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != id ? c : { ...c, isEditable: true }) });
    };

    unmarkEditable = (id:number) => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }) });
    };

    updateContact = (contact:Contact) => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != contact.id ? c : { ...contact, isEditable: undefined }) });
    };

    render() {

        let { contacts } = this.state;

        return (
            <section className='col-sm-9 border border-primary p-4 mx-auto'>
                <h3>Contact List</h3>

                <ContactsHeader />

                <ContactForm saveContact={this.addContact} />

                {contacts.map(c => (
                    c.isEditable ?
                        <ContactForm key={c.id} c={c} saveContact={this.updateContact} unmarkEditable={this.unmarkEditable}  /> :
                        <ContactRow key={c.id} c={c} deleteById={this.deleteById} markEditable={this.markEditable} />
                ))}

            </section>
        );

    }
}

export default Contacts;