import React from 'react';
import './Panel.css';

const Panel = ({ title, time, imageSrc, content }) => {
  return (
    <div className="panel">
      <div className="title">
        <h2 className="title-text">{title}</h2>
        <h2 className="title-time">{time}</h2>
      </div>
      <div className="content">
        <div className="content-img">
          <img src={imageSrc} alt={`Image for ${title}`}  />
        </div>
        <p className="content-text">{content}</p>
      </div>
    </div>
  );
};

export default Panel;