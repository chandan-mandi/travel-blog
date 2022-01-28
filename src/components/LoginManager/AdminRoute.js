import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    console.log(admin);
    const location = useLocation();
    if (isLoading) {
        return <div className='mx-auto '>
        < div style={{ borderTopColor: "transparent" }} className="mx-auto mt-24 w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin" ></div>
        </div >
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;