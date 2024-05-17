import { useEffect, useState } from "react";

const CreateUser = (props) => {
    console.log("pros", props);
    const [user, setUser] = useState({
        email: "",
        userName: "",
        fullName: "",
        department: "",
        position: "",
    });

    useEffect(() => {
        if (!!props.editedUser) setUser(props.editedUser);
    }, [props.editedUser]);

    const handleUserChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }))
    }

    const handleResetForm = () => {
        setUser({
            email: "",
            userName: "",
            fullName: "",
            department: "",
            position: "",
        });
        props.onClose(); // Close the form when reset button is clicked
    };

    return (
        <div id='form'>

            <div className="form">


                <div>
                    {/* Các trường nhập dữ liệu */}
                    <div>
                        <label>id: </label>
                        <input type="text" value={user?.id}
                            name='id'
                            onChange={handleUserChange}

                        />

                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            value={user.email}
                            onChange={(event) =>
                                setUser({ ...user, email: event.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Your username"
                            value={user.userName}
                            onChange={(event) =>
                                setUser({ ...user, userName: event.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Your full name"
                            value={user.fullName}
                            onChange={(event) =>
                                setUser({ ...user, fullName: event.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="department">Department</label>
                        <select
                            name="department"
                            id="department"
                            value={user?.department}
                            onChange={(event) =>
                                setUser({
                                    ...user,
                                    department: event.target.value,
                                })
                            }
                        >
                            <option value="">Select your department</option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="position">Position</label>
                        <select
                            name="position"
                            id="position"
                            value={user?.position}
                            onChange={(event) =>
                                setUser({
                                    ...user,
                                    position: event.target.value,
                                })
                            }
                        >
                            <option value="">Select your position</option>
                            <option value="dev">Developer</option>
                            <option value="sale">Sale</option>
                            <option value="accounter">Accounter</option>
                        </select>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                if (props.updateUser) {
                                    props.updateUser(user);
                                } else {
                                    props.createUser(user);
                                }
                                setUser({
                                    email: "",
                                    userName: "",
                                    fullName: "",
                                    department: "",
                                    position: "",
                                });
                                props.onCreate(); // Ẩn biểu mẫu sau khi tạo hoặc cập nhật người dùngc
                            }}
                        >
                            {props.editedUser ? "Update user" : "Create user"}
                        </button>
                        <button
                            className="btn-reset"
                            onClick={handleResetForm} // Ẩn biểu mẫu khi nhấp vào nút reset
                        >Reset form</button>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default CreateUser;
