import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav className={`navbar ${theme}`}>
            <div className="container">
                <h1>Football Website</h1>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
