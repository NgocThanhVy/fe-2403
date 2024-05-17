import { useEffect, useState } from "react";


const EditUser = (props) => {
    const [user, setUser] = useState({
        email: "",
        userName: "",
        fullName: "",
        department: "",
        position: "",
    });
    console.log("use propsr", props);
    const handleChangeUser = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }))
    }

    const handleUserChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }))
    }
    useEffect(() => {
        if (!!props.editedUser) setUser(props?.editedUser);
    }, [props?.editedUser]);

    return (
        <div id='form'>
            <div className="form">
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
                        value={user?.email}
                        onChange={handleChangeUser}

                    />
                </div>
                <div >
                    <label htmlFor="userName">userName</label>
                    <input
                        type="userName"
                        name="userName"
                        id="userName"
                        placeholder="Your userName"
                        value={user?.userName}
                        onChange={(event) =>
                            setUser({
                                ...user,
                                userName: event.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="fullName"
                        name="fullName"
                        id="fullName"
                        placeholder="Your full name"
                        value={user?.fullName}
                        onChange={(event) =>
                            setUser({
                                ...user,
                                fullName: event.target.value,
                            })
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
                            props.updateUser(user);
                            console.log('props.updateUser(user)', user)
                            setUser({
                                email: "",
                                userName: "",
                                fullName: "",
                                department: "",
                                position: "",
                            });
                        }}
                    >
                        {props.editedUser ? "Update user" : "Create user"}


                    </button>
                    <button className="btn-reset" onClick={() => {

                        setUser({
                            email: "",
                            userName: "",
                            fullName: "",
                            department: "",
                            position: "",
                        });
                    }}>Reset form</button>
                </div>
            </div>
        </div>

    );
};


export default EditUser;