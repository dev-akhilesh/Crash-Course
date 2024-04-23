import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const DashboardPage = () => {

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to={`dashboard/profile`}>Profile</Link>
                </li>
                <li>
                    <Link to={`dashboard/settings`}>Settings</Link>
                </li>
            </ul>

            <Routes>
                <Route path={`dashboard/profile`} element={<Profile />} />
                <Route path={`dashboard/settings`} element={<Settings />} />
            </Routes>
        </div>
    );
};

export default DashboardPage;