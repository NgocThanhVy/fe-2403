import React, { useEffect, useState } from "react";
import "./userpage.css"
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";




const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [editedUser, setEditedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Thêm biến trạng thái isEditing
    const [showForm, setShowForm] = useState(false); // Trạng thái để điều khiển việc hiển thị biểu mẫu

    const callApi = async () => {
        const data = await fetch("http://localhost:3000/users");
        const result = await data.json();
        setUsers(result);
    };

    const handleDelete = async (userId) => {
        await fetch(`http://localhost:3000/users/${userId}`, { method: "DELETE" });
        await callApi();
    };

    const createUser = async (user) => {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...user }),
        });
        await callApi();
    };

    const updateUser = async (user) => {
        const res = await fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        setEditedUser(null);
        await callApi();
        setIsEditing(false); // Đặt lại isEditing thành false sau khi cập nhật
        return res.ok;
    };

    const getUserById = async (userId) => {
        const data = await fetch(`http://localhost:3000/users/${userId}`)
        const result = await data.json() // Thêm await ở đây
        setEditedUser(result);
    }

    const handleEdit = (user) => {
        getUserById(user.id)
        setEditedUser(user);
        setIsEditing(true); // Đặt isEditing thành true khi chỉnh sửa
    };

    const createForm = () => {
        setShowForm(false);
    }

    const onClose = () => {
        setShowForm(false);
    }


    useEffect(() => {
        callApi();
    }, []);

    return (
        <>
            <button onClick={() => setShowForm(true)}>Create new user</button>

            {/* Truyền giá trị của isEditing cho EditUser */}
            {isEditing && <EditUser editedUser={editedUser} updateUser={updateUser} />}
            {/* Render CreateUser nếu không đang chỉnh sửa */}
            {showForm &&  // Hiển thị biểu mẫu nếu showForm là true
                !isEditing && <CreateUser createUser={createUser} onCreate={createForm} onClose={onClose} />}
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.userName}</td>
                                <td>{item.fullName}</td>
                                <td>{item.department}</td>
                                <td>{item.position}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserPage;