import React, { useState } from 'react';
import { CgMenuGridR } from "react-icons/cg";
import { Link } from 'react-router-dom';
import NavItems from './NavItems';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-blue-50">
            <nav className="flex justify-between items-center container mx-auto py-4 text-2xl font-bold px-2">
                <Link className="flex items-center" to="/"><img className="h-10" src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284034.png?token=exp=1643195139~hmac=72f544eefd1737b599e273936baab8f0" alt="banner" />Tours Story</Link>
                <div
                    className="lg:hidden block text-4xl"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <CgMenuGridR />
                </div>
                <div className="lg:block hidden">
                    <NavItems />
                </div>
            </nav>
            <div
                className={
                    isOpen
                        ? "grid grid-rows-4 text-center items-center text-4xl font-bold"
                        : "hidden"
                }
            >
                <NavItems />
            </div>
        </div>
    );
};

export default Navbar;