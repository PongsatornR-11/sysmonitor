import React, { useRef } from 'react';
import './FancyText.css';

const FancyText = ({ text }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div
      className="fancy-text-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="fancy-text">{text}</div>
    </div>
  );
};

export default FancyText;
