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

    delBtnClicked = id => {
        this.setState({ contacts: this.state.contacts.filter( c => c.id!=id ) });
    };

    render(){
        return (
            <section>
                <h3>Contact List</h3>

                <table>
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
                            this.state.contacts.map( c => (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.fullName}</td>
                                    <td>{c.mobile}</td>
                                    <td>{c.mailId}</td>
                                    <td>
                                        <button type='button' onClick={ event => this.delBtnClicked(c.id) }>DELETE</button>
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