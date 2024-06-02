import React, { useState } from 'react';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='signup'>
            <form>
                <h2>LOGIN</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='home'>
                    <button>Login</button>
                    <a href='/'>Back to homepage</a>
                </div>

            </form>
        </div>
    );
}

export default Login;
