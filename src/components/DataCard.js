import React from 'react';
import './DataCard.css';

const DataCard = ({ title, bigText, description , backgroundColor, descriptionColor}) => {
  return (
    <div className="data-card" style={{ backgroundColor }}>
      <div className="data-card-header">
        <h4>{title}</h4>
      </div>
      <div className="data-card-body">
        <h1>{bigText}</h1>
        <p style={{ color: descriptionColor }}>{description}</p>
      </div>
    </div>
  );
};

export default DataCard;
