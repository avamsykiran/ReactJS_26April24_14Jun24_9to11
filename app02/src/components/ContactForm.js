import { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0, 
            fullName: "", 
            mobile: "", 
            mailId: ""
        };
    }

    render() {

        let {id,fullName,mobile,mailId} = this.state;

        return (
            <form className='row p-2 border-bottom'>
                <div className='col-1 text-end'>
                    <input type="number" value={id} className='form-control' readOnly={true} />
                </div>
                <div className='col text-start'>
                    <input type="text" value={fullName} className='form-control' />
                </div>
                <div className='col-2'>
                    <input type="text" value={mobile} className='form-control' />
                </div>
                <div className='col-2'>
                    <input type="email" value={mailId} className='form-control' />
                </div>
                <div className='col-2 text-center'>
                    <button className='btn btn-sm btn-primary' >
                        SAVE
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactForm;