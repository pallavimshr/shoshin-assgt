import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <div className="icon">
          <img src="icon1.png" alt="Icon 1" />
        </div>
        <div className="icon">
          <img src="icon2.png" alt="Icon 2" />
        </div>
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-pic" />
          <span className="profile-name">Pallavi Mishra</span>
          <img src="down-arrow.png" alt="Down Arrow" className="down-arrow" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
