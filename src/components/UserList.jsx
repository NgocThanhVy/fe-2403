import React from 'react';
import classes from "assets/styles/UserList.module.scss";
import { Link } from 'react-router-dom';

const UserList = () => {
  return (
    <div className='py-5'>
        <div className='containerUser'>
            <div>
                <Link to="usercreate"
                    className={`${classes.btn} ${classes.btn__create__new}`}
                >
                    Create new User
                </Link>
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Birthday</th>
                    <th>Department</th>
                    <th colSpan={2}>Action</th>
                </tr>
                <tr>
                    <td>1789dcex</td>
                    <td>Đào Tuấn</td>
                    <td>Anh</td>
                    <td>Long An</td>
                    <td>20/01</td>
                    <td>VTI Group</td>
                <td>
                    <Link className={`${classes.btn} ${classes.btn__edit}`}
                    to="user/1"
                    >Edit</Link>
                </td>
                <td>
                    <Link className={`${classes.btn} ${classes.btn__delete}`}>Delete</Link>
                </td>
                </tr>
            </table>
        </div>
    </div>
    
  )
}

export default UserList;
