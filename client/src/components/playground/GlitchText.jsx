import React, { useState, useRef } from 'react';
import './GlitchText.css';

const GlitchText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const textRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mousePositionRef.current = { x: e.clientX, y: e.clientY };

    if (intervalRef.current) return;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '+=_-/\?<>!@#$%^&*()';
    const allChars = letters + specialChars;

    intervalRef.current = setInterval(() => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const x = mousePositionRef.current.x - rect.left;
      const hoverIndex = Math.floor((x / rect.width) * text.length);
      const glitchRadius = 4;

      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            const distance = Math.abs(index - hoverIndex);
            if (distance < glitchRadius) {
              return allChars[Math.floor(Math.random() * allChars.length)];
            }
            return letter;
          })
          .join('')
      );
    }, 30);
  };

  const handleMouseOut = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDisplayText(text);
  };

  return (
    <div
      className="glitch-text-container"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <h1 className="glitch-text" ref={textRef}>
        {displayText}
      </h1>
    </div>
  );
};

export default GlitchText;
