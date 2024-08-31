import React from 'react';
import './StatisticsCard.css'; 

const StatisticsCard = ({ title, bigText, smallText1, smallText2, picture }) => {
  return (
    <div className="statistics-card">
      <div className="statistics-card-content">
        <div className="text-content">
          <h3>{title}</h3>
          <h1>{bigText}</h1>
          <p className="small-text">{smallText1}</p>
          <p className="small-text">{smallText2}</p>
        </div>
        <div className="picture-content">
          <img src={picture} alt="Statistics" />
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
