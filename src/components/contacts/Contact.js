import React from "react";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";

const Contact = ({contact}) => {
    const { name, phone, email, avatar, id } = contact;

    return (
        <tr>
            <td>
                <div className='custom-control custom-checkbox'>
                    <input type="checkbox" className="custom-control-input"/>
                    <label className='custom-control-label'></label>
                </div>
            </td>
            <td> <Avatar round={true} src={avatar} size='100' className='avatar' /> </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className='actions'>
                <Link to={`/contacts/edit/${id}`} href='#' ><span className='material-icons mr-3'>edit</span></Link>
                <Link to='#' ><span className='material-icons text-danger'>remove_circle</span></Link>
            </td>
        </tr>
    )
}

export default Contact