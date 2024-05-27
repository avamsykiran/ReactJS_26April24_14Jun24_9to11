import { Component } from 'react';
import Contact from '../models/Contact';

interface ContactFormProps {
    c?:Contact;
    unmarkEditable?:(id:number)=>void;
    saveContact:(c:Contact) => void;
}

class ContactForm extends Component<ContactFormProps,Contact> {
    constructor(props:ContactFormProps) {
        super(props);
        this.state = props.c ? { ...props.c } : { id: 0, fullName: "", mobile: "", mailId: "" };
    }

    save = () => {

        //validation shall go here.

        this.props.saveContact(this.state);
        this.setState({ id: 0, fullName: "", mobile: "", mailId: "" });
    }

    cancel = () => {
        this.props.unmarkEditable ?
            this.props.unmarkEditable(this.state.id) :
            this.setState({ id: 0, fullName: "", mobile: "", mailId: "" });
    }

    render() {

        let { id, fullName, mobile, mailId } = this.state;

        return (
            <form className='row p-2 border-bottom' onSubmit={e => { e.preventDefault(); this.save(); }}>
                <div className='col-1 text-end'>
                    <input type="number" value={id} className='form-control' readOnly={true} />
                </div>
                <div className='col text-start'>
                    <input type="text" value={fullName} className='form-control'
                        onChange={e => this.setState({ fullName: e.target.value })} />
                </div>
                <div className='col-2'>
                    <input type="text" value={mobile} className='form-control'
                        onChange={e => this.setState({ mobile: e.target.value })} />
                </div>
                <div className='col-2'>
                    <input type="email" value={mailId} className='form-control'
                        onChange={e => this.setState({ mailId: e.target.value })} />
                </div>
                <div className='col-2 text-center'>
                    <button className='btn btn-sm btn-primary' >
                        SAVE
                    </button>
                    <button className='btn btn-sm btn-danger ms-1' type="button" onClick={e => this.cancel()}>
                        CANCEL
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactForm;