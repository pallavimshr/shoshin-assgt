import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h2 className="heading">Recent Activity</h2>
      <p className="text">10:40 AM,Fri 10 Sep 2021</p>
      <p className="text">You posted a new job</p>
      <p className="text">Kindly check the requirements and terms of work and make sure everything is right.</p>
      <div className="last-line">
        <p className="text">Today you makes 12 activity.</p>
        <button className="see-all-btn">See All Activity</button>
      </div>
    </div>
  );
};

export default RecentActivity;
