import React, { useState, useEffect } from 'react'


const Blinking = ({ children, time = 1000, className}) => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(prev => !prev)
        }, time)

        return () => clearInterval(interval);
    }, [])
    return (
        <div style={{ visibility: isVisible ? 'visible' : 'hidden' }} className={`${className}`}>
            {children}
        </div>
    )
}

export default Blinking