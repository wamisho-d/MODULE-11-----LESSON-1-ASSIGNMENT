import React from 'react';
import './Header.css'; // CSS for Header styling

const Header = () => {
    return (
        <div className="header">
            <img
                src="https://via.placeholder.com/1920x400"
                alt="Background"
                className="header-background"
            />
            <div className="header-overlay">
                <h1>John Doe</h1>
            </div>
        </div>
    );
};

export default Header;
