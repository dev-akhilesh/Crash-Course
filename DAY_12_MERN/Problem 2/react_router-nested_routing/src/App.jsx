import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import DashboardPage from './DashboardPage';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>

  );
};

export default App;

