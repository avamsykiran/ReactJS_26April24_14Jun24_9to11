import { Component } from 'react';

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

                <div className='row fw-bold text-center p-2 border-bottom'>
                    <div className='col-1'>Contact#</div>
                    <div className='col'>Full Name</div>
                    <div className='col-2'>Mobile</div>
                    <div className='col-2'>Mail Id</div>
                    <div className='col-2'>Actions</div>
                </div>

                {
                    contacts.map(c => (
                        <div className='row p-2 border-bottom text-center' key={c.id}>
                            <div className='col-1 text-end'>{c.id}</div>
                            <div className='col text-start'>{c.fullName}</div>
                            <div className='col-2'>{c.mobile}</div>
                            <div className='col-2'>{c.mailId}</div>
                            <div className='col-2'>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-danger'
                                    onClick={event => this.deleteById(c.id)}>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    ))
                }

            </section>
        );

    }
}

export default Contacts;