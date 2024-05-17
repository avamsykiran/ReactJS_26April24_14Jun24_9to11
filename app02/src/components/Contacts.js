import { Component } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
                { id: 2, fullName: "Murthy", mobile: "9052224755", mailId: "murthy@gmail.com" },
                { id: 3, fullName: "Suresh", mobile: "9052224754", mailId: "suresh@gmail.com" },
                { id: 4, fullName: "Ramesh", mobile: "9052224751", mailId: "ramesh@gmail.com" },
                { id: 5, fullName: "Sagar", mobile: "9052224752", mailId: "sagar@gmail.com" }
            ]
        };
    }

    deleteById = id => {
        this.setState({ contacts: this.state.contacts.filter(c => c.id != id) });
    };

    render() {

        let { contacts } = this.state;

        return (
            <section className='col-sm-9 border border-primary p-4 mx-auto'>
                <h3>Contact List</h3>

                <ContactsHeader />

                <ContactForm />

                { contacts.map(c => <ContactRow key={c.id} c={c} deleteById={this.deleteById} /> ) }

            </section>
        );

    }
}

export default Contacts;