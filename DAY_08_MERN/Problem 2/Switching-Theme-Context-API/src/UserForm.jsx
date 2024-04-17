import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const UserForm = () => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <div className={`form-container ${currentTheme}`}>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
