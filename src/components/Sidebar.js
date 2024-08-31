import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <img src="/group-2770.svg" alt="Logo" className="logo" />
        <h2 className="name"><img src="/group-2771.svg" alt="Name"  /></h2>
      </div>
      <nav className="menu">
        <h3 className="menu-title">MAIN MENU</h3>
        <ul>
          <li className="menu-item">
            <img src="/ic_dashboard.png" alt="Home" className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </li>
          <li className="menu-item">
            <img src="/icrecruitment@2x.png" alt="Profile" className="menu-icon" />
            <span className="menu-text">Recruitment</span>
          </li>
          <li className="menu-item">
            <img src="/ic_calendar.png" alt="Messages" className="menu-icon" />
            <span className="menu-text">Schedule</span>
          </li>
          <li className="menu-item">
            <img src="/ic_employee.png" alt="Settings" className="menu-icon" />
            <span className="menu-text">Employee</span>
          </li>
          <li className="menu-item">
            <img src="/ic_department.png" alt="Logout" className="menu-icon" />
            <span className="menu-text">Deparment</span>
          </li>
        </ul>

        <h3 className="menu-title">OTHERS</h3>
        <ul>
          <li className="menu-item">
            <img src="/ic_support.png" alt="Help" className="menu-icon" />
            <span className="menu-text">Support </span>
          </li>
          <li className="menu-item">
            <img src="/ic_settings.png" alt="About" className="menu-icon" />
            <span className="menu-text">Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
