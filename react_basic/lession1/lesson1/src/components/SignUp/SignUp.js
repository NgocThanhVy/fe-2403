import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullname, email, password, confirmPassword, birthday } = formData;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        alert('success')
        console.log("formData", formData)
        console.log("username", fullname)
        console.log("email", email)
        console.log("password", password)
        console.log("confirmPassword", confirmPassword)
        console.log("birthday", birthday)

        setFormData({
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthday: '',
        });
    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h2>Register System</h2>

                <div className="input-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="enter fullname"
                        value={formData.fullname}
                        onChange={handleChange}

                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter mail"
                        value={formData.email}
                        onChange={handleChange}

                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter password"
                        value={formData.password}
                        onChange={handleChange}

                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}

                    />
                </div>
                <div className="input-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}

                    />
                </div>
                <div className='home'>
                    <button type="submit">Register</button>
                    <a href='login'>Do you have account?</a>
                </div>

            </form>
        </div>
    );
};

export default SignUp;
