import React, { useState, useEffect, useRef } from 'react';

const ReactiveText = ({ children, defaultColor = '#17313E', hoverColor = '#CFFFE2' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const letterRefs = useRef([]);

  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ padding: '50px', fontSize: '32px', fontFamily: 'sans-serif' }}>
      {text.split('').map((char, index) => {
        const ref = letterRefs.current[index] || React.createRef();
        letterRefs.current[index] = ref;

        let scale = 1;
        let color = defaultColor;

        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const dx = mousePos.x - (rect.left + rect.width / 2);
          const dy = mousePos.y - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            scale = 1.5 - distance / 100;
            if (typeof hoverColor === 'function') {
              color = hoverColor(distance);
            } else if (hoverColor) {
              color = hoverColor;
            } else {
              color = `rgb(${255 - distance}, 100, 200)`;
            }
          }
        }

        return (
          <span
            key={index}
            ref={ref}
            className='select-none'
            style={{
              display: 'inline-block',
              transform: `scale(${scale})`,
              color,
              transition: 'transform 0.1s, color 0.1s',
              marginRight: '2px',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default ReactiveText;