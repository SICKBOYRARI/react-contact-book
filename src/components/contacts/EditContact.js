import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditContact = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contact.contact)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setNumber(contact.phone);
            setEmail(contact.email);
            setAvatar(contact.avatar);
        }
        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = e => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {name: name, phone: number, email: email, avatar: avatar})

        dispatch(updateContact(update_contact))
        history.push('/')
    }

    return (
        <div className='card border-0  shadow'>
            <div className='card-header '>Add a Contact</div>
            <div className='card-body'>
                <form onSubmit={e => onUpdateContact(e)}>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter Your Name' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter Your Number' value={number} type="text" onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter Your Email' value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter Your Avatar (URL)' value={avatar} type="text" onChange={(e) => setAvatar(e.target.value)}/>
                    </div>
                    <button className='btn btn-warning' type='submit'>Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact