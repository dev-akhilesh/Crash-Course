import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Header = () => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <div className={`header ${currentTheme}`}>
            <h1>Changing Theme</h1>
        </div>
    );
};

export default Header;
