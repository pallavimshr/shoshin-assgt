import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2 className="name">My App</h2>
      </div>
      <nav className="menu">
        <h3 className="menu-title">MAIN MENU</h3>
        <ul>
          <li className="menu-item">
            <img src="home.png" alt="Home" className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </li>
          <li className="menu-item">
            <img src="profile.png" alt="Profile" className="menu-icon" />
            <span className="menu-text">Recruitment</span>
          </li>
          <li className="menu-item">
            <img src="messages.png" alt="Messages" className="menu-icon" />
            <span className="menu-text">Schedule</span>
          </li>
          <li className="menu-item">
            <img src="settings.png" alt="Settings" className="menu-icon" />
            <span className="menu-text">Employee</span>
          </li>
          <li className="menu-item">
            <img src="logout.png" alt="Logout" className="menu-icon" />
            <span className="menu-text">Deparment</span>
          </li>
        </ul>

        <h3 className="menu-title">OTHERS</h3>
        <ul>
          <li className="menu-item">
            <img src="help.png" alt="Help" className="menu-icon" />
            <span className="menu-text">Support </span>
          </li>
          <li className="menu-item">
            <img src="about.png" alt="About" className="menu-icon" />
            <span className="menu-text">Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
