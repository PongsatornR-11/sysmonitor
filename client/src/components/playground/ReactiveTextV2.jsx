import React, { useState, useEffect, useRef } from 'react';

const glitchSymbols = ['@', '#', '$', '%', '&', '*', '+', '!', '?', '~'];

const ReactiveTextV2 = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const letterRefs = useRef([]);
  const originalText = typeof children === 'string' ? children : '';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ padding: '50px', fontSize: '32px', fontFamily: 'monospace' }}>
      {originalText.split('').map((char, index) => {
        const ref = letterRefs.current[index] || React.createRef();
        letterRefs.current[index] = ref;

        let displayChar = char;

        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const dx = mousePos.x - (rect.left + rect.width / 2);
          const dy = mousePos.y - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            displayChar = glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];
          }
        }

        return (
          <span
            key={index}
            ref={ref}
            style={{
              display: 'inline-block',
              transition: 'color 0.2s',
              marginRight: '2px',
            }}
          >
            {displayChar}
          </span>
        );
      })}
    </div>
  );
};

export default ReactiveTextV2;
