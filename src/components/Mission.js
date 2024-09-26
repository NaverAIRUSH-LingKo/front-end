import React from 'react';
import '../css/Mission.css'; // 스타일링을 위한 CSS 임포트

const Mission = ({ mission }) => {
  return (
    <div className="mission-container">
      <span className="mission-label">mission</span>
      <p className="mission-content">{mission}</p>
    </div>
  );
};

export default Mission;
