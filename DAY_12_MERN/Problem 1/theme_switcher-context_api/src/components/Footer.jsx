import React from 'react';
import { useTheme } from './ThemeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`footer ${theme}`}>
            <p>Made with ❤️ by Akhilesh</p>
        </footer>
    );
};

export default Footer;
