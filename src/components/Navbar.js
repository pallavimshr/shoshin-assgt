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
          <img src="/ic_round-notifications.png" alt="Icon 1" />
        </div>
        <div className="icon">
          <img src="/bi_chat-left-dots-fill.png" alt="Icon 2" />
        </div>
        <div className="profile">
          <img src="/Mask Group.png" alt="Profile" className="profile-pic" />
          <span className="profile-name">Admirra John</span>
          <img src="/frame-101.svg" alt="Down Arrow" className="down-arrow" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
