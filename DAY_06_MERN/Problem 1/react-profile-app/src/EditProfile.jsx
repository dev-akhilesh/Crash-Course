import React from 'react';

function EditProfile({ userData }) {
    return (
        <div className="edit-profile">
            <h2>Edit Profile</h2>
            <form>
                <label>
                    Name:
                    <input type="text" defaultValue={userData.name} />
                </label>
                <label>
                    Email:
                    <input type="email" defaultValue={userData.email} />
                </label>
                <label>
                    Bio:
                    <textarea defaultValue={userData.bio}></textarea>
                </label>
            </form>
        </div>
    );
}

export default EditProfile;
