import React from "react";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";
import {deleteContact} from "../../actions/contactAction";
import {useDispatch} from "react-redux";

const Contact = ({contact, selectAll}) => {
    const { name, phone, email, avatar, id } = contact;
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <div className='custom-control custom-checkbox'>
                    <input checked={selectAll} type="checkbox" className="custom-control-input"/>
                    <label className='custom-control-label'></label>
                </div>
            </td>
            <td> <Avatar round={true} src={avatar} size='100' className='avatar' /> </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className='actions'>
                <Link to={`/contacts/edit/${id}`} href='#' ><span className='material-icons mr-3'>edit</span></Link>
                <span className='material-icons text-danger' onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
            </td>
        </tr>
    )
}

export default Contact