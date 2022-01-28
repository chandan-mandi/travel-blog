import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import CommonBtn from './CommonBtn';

const NavItems = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Link className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2" to="/">
                Home
            </Link>
            <Link className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2" to="/about">
                About Me
            </Link>
            <Link
                className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2"
                to="/blogs"
            >
                Blog
            </Link>
            <Link
                className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2"
                to="/contact"
            >
                Contact
            </Link>
            {user.email ?
                <>
                <Link
                className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2"
                to="/dashboard"
            >
                Dashboard
            </Link>
                    <span className="text-xl mr-2 text-purple-900">{user.displayName}</span>
                    <button onClick={logOut} className="justify-self-center items-center py-1.5 px-7 border-2 border-purple-700 rounded-md text-xl font-bold text-purple-900 bg-pink-200 hover:bg-purple-700 hover:text-white">Log out</button>
                </> :
                <CommonBtn destination="/login" title="Login" />
            }
        </>
    );
};

export default NavItems;