import React, { useState } from 'react';
import { useSelector } from "react-redux"

const Component4 = () => {
    const userList = useSelector((state) => state.user.users);
 

    return (
      <div>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component4</h1>
        <div className="userPage">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Position</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {userList?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.userName}</td>
                                <td>{item.fullName}</td>
                                <td>{item.department}</td>
                                <td>{item.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
      </div>
    )
  }

  export default Component4;