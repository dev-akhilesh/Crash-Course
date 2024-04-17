import React from 'react';

function UserProfile({ userData }) {
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
}

export default UserProfile;
