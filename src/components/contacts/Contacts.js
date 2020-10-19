import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Contact from "./Contact";
import {selectAllContact, clearAllContact, deleteAllContact} from "../../actions/contactAction";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contact.contacts);
    const [selectAll, setSelectAll] = useState(false);
    const selectedContacts = useSelector(state => state.contact.selectedContacts);

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        } else {
            dispatch(clearAllContact());
        }
    }, [selectAll]);

    return (
        <div>
            {
                selectedContacts.length > 0 ? (
                    <button className='btn btn-danger mb-3' onClick={() => dispatch(deleteAllContact())}>Delete All</button>
                ) : null }
            <table className="table shadow">
                <thead className='bg-primary text-white'>
                <tr>
                    <th>
                        <div className='custom-control custom-checkbox'>
                            <input value={selectAll} onClick={() => setSelectAll(!selectAll)} id='selectAll' type="checkbox" className="custom-control-input"/>
                            <label htmlFor='selectAll' className='custom-control-label'></label>
                        </div>
                    </th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((contact) => <Contact contact={contact} key={contact.id} selectAll={selectAll} />)
                }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts