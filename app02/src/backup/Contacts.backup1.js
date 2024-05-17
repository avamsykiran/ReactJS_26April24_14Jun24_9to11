import { Component } from 'react';

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts:[
                {id:1,fullName:"Vamsy Kiran",mobile:"9052224753",mailId:"vamsy@gmail.com"},
                {id:2,fullName:"Murthy",mobile:"9052224755",mailId:"murthy@gmail.com"},
                {id:3,fullName:"Suresh",mobile:"9052224754",mailId:"suresh@gmail.com"},
                {id:4,fullName:"Ramesh",mobile:"9052224751",mailId:"ramesh@gmail.com"},
                {id:5,fullName:"Sagar",mobile:"9052224752",mailId:"sagar@gmail.com"}
            ]
        };
    }

    deleteById = id => {
        this.setState({ contacts: this.state.contacts.filter( c => c.id!=id ) });
    };

    render(){

        let { contacts } = this.state;

        return (
            <section className='col-sm-9 border border-primary p-4 mx-auto'>
                <h3>Contact List</h3>

                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Contact#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Mail Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map( c => (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.fullName}</td>
                                    <td>{c.mobile}</td>
                                    <td>{c.mailId}</td>
                                    <td>
                                        <button type='button' className='btn btn-sm btn-danger'  onClick={ event => this.deleteById(c.id) }>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        );

    }
} 

export default Contacts;