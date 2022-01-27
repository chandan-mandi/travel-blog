import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-500 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
<div class="mb-3 pt-0">
  <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>