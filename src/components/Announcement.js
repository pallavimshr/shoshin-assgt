import React from 'react';
import './Announcement.css'; 

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-header">
        <div className="announcement-title">Announcement</div>
        <div className="announcement-date">
          Today, 13 Sep 2021
          <span className="dropdown-arrow"></span>
        </div>
      </div>
      <div className="announcement-items">
        <div className="announcement-item">
          <div className="item-content">
            <h4>Outing Schedule for every department</h4>
            <p className="schedule">5 minutes ago</p>
          </div>
          <div className="item-icons">
          <img src="/bi_pin-angle-fill (1).png" alt="Notification Icon" className="icon" />
            <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
        <div className="announcement-item">
          <div className="item-content">
            <h4>Meeting HR Department</h4>
            <p className="schedule">Yesterday, 12:30PM</p>
          </div>
          <div className="item-icons">
          <img src="/bi_pin-angle-fill.png" alt="Notification Icon" className="icon" />
            <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
        <div className="announcement-item">
          <div className="item-content">
            <h4>IT Department need two more talents for UX/UI Designer positon</h4>
            <p className="schedule">Scheduled for 4:00 PM</p>
          </div>
          <div className="item-icons">
          <img src="/bi_pin-angle-fill.png" alt="Notification Icon" className="icon" />
            <img src="/ic-horizontal menu.png" alt="Notification Icon" className="icon" />
          </div>
        </div>
      </div>
      <div className="announcement-footer">
        <a href="#" className="see-all">See all announcements</a>
      </div>
    </div>
  );
};

export default Announcement;
