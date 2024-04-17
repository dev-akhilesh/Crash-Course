import React, { useState } from 'react';
import './App.css';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';

function App() {
  const [userData, setUserData] = useState({
    name: 'Akhilesh Takawale',
    email: 'akhileshtakawale703@gmail.com',
    bio: "I'm Akhilesh, a passionate MERN Stack web developer.",
  });
  const [mode, setMode] = useState('view');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'view' ? 'edit' : 'view'));
  };

  return (
    <div className="app">
      <h1>User Profile App</h1>
      {mode === 'view' ? (
        <UserProfile userData={userData} />
      ) : (
        <EditProfile userData={userData} />
      )}
      <button onClick={toggleMode}>
        {mode === 'view' ? 'Edit Profile' : 'View Profile'}
      </button>
    </div>
  );
}

export default App;
