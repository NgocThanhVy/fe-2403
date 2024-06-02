import React from 'react';
import "./menu.css"
import { Link } from 'react-router-dom';

const Menu = () => {
    const menus = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "User List",
            url: "user-list",
        },
        {
            id: 3,
            title: "Post Log",
            url: "post-log",
        },
        {
            id: 4,
            title: "Login",
            url: "login",
        },
        {
            id: 5,
            title: "Sign Up",
            url: "sign-up",
        },
    ];
    return (
        <div>
            <ul className='menu'>
                {menus.map((menu) => {
                    return (
                        <li key={menu.id}>
                            <Link to={menu.url}>{menu.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}

export default Menu;
