import React from 'react'

const ProgressBar = ({percent}) => {
    const repeat = Math.round(percent / 2)
    const result = '#'.repeat(repeat) + '_'.repeat(50 - repeat) + '|'

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

    return <span className={`${color} flex justify-items-start`}>:{result}</span>
}

export default ProgressBar