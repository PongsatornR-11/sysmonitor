import React from 'react';
import './OrbitingStars.css';

const OrbitingStars = () => {
  return (
    <div className="stars-container">
      <div className="central-body"></div>
      <div className="orbit orbit-1">
        <div className="star star-1"></div>
      </div>
      <div className="orbit orbit-2">
        <div className="star star-2"></div>
      </div>
      <div className="orbit orbit-3">
        <div className="star star-3"></div>
      </div>
      <div className="orbit orbit-4">
        <div className="star star-4"></div>
      </div>
    </div>
  );
};

export default OrbitingStars;