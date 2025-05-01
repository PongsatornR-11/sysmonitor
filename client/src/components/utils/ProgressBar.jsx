import React from 'react'

const ProgressBar = ({ percent }) => {
    const repeatCal = Math.round(percent / 2)
    const bar =
        percent === 100
            ? '#'.repeat(repeatCal) + percent + '%'
            : '#'.repeat(repeatCal) + '_'.repeat(45 - repeatCal) + percent + '%'
    let color = 'text-green-400'; // default

    if (percent <= 30) {
        color = 'text-green-400';
    } else if (percent <= 50) {
        color = 'text-yellow-400';
    } else if (percent <= 75) {
        color = 'text-orange-400';
    } else {
        color = 'text-red-400';
    }

    return <span className={`${color} font-mono`}>:{bar}</span>
}

export default ProgressBar
