import React, { useState, useRef } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const emailRef = useRef();

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        setIsNameValid(newName.length >= 3);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', emailRef.current.value);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                    {!isNameValid && <p className="validation-message">Name must be at least 3 characters long.</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" ref={emailRef} />
                </div>

                <button type="submit" disabled={!isNameValid}>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
