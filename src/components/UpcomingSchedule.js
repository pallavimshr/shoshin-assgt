import React from 'react';
import './UpcomingSchedule.css'; 

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <div className="schedule-header">
        <div className="schedule-title">Upcoming Schedule</div>
        <div className="schedule-date">
          Today, 13 Sep 2021
          <span className="dropdown-arrow"></span>
        </div>
      </div>
      <div className="schedule-items">
      <div className="additional-text">
          <p>Priority</p>
        </div>
        <div className="schedule-item">
        
          <div className="item-content">
            
            <h4>Review Candidate Applications</h4>
            <p className="schedule-time">Today- 11:30 AM</p>
          </div>
          <div className="item-icon">
          <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
       
        <div className="schedule-item">
            
          <div className="item-content">
            <h4>Interview with Candidates</h4>
            <p className="schedule-time">Today 10:30 AM</p>
          </div>
          <div className="item-icon">
          <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
        <div className="additional-text">
          <p>Other</p>
        </div>
        <div className="schedule-item">
          <div className="item-content">
            <h4>Short Meeting with Product Designer from IT Department</h4>
            <p className="schedule-time">Today 9:15 AM</p>
          </div>
          <div className="item-icon">
          <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
      </div>
      <div className="schedule-footer">
        <a href="#" className="see-all">Create a New Schedule</a>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
