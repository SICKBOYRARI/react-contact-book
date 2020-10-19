import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [avatar, setAvatar] = useState('');

    const createContact = e => {
        e.preventDefault();

        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: number,
            email: email,
            avatar: avatar
        }

        dispatch(addContact(new_contact));
        history.push('/');
    }

    return (
        <div className='card border-0  shadow'>
            <div className='card-header '>Add a Contact</div>
            <div className='card-body'>
                <form onSubmit={(e) => createContact(e)}>
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
                    <button className='btn btn-primary' type='submit'>Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact