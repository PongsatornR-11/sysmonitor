import React from 'react'

const ProgressBar = ({ percent, suffix = '', fill = '#', blank = '_', total= '50' }) => {
    //digit numbers
    let totalDigits = total; // changed to let since we modify it later
    const percentDidits =
        percent < 10
            ? 3
            : percent < 100
                ? 4
                : 5;
    const suffixUnitDigits = suffix.length;
    const calProgressDigits = Math.floor(percent / 100 * totalDigits); // changed actualTotalDigits to totalDigits
    const calBlank = Math.floor(totalDigits - percentDidits - calProgressDigits - suffixUnitDigits);
    const calBlankDigit =
        calBlank < 0
            ? 0
            : calBlank;
    let exceedFildigits = 0
    if (calBlank < 0) {
        exceedFildigits = calBlank 
    }
    //digit str
    const calProgress = fill.repeat(calProgressDigits + exceedFildigits);
    const calBlankStr = blank.repeat(calBlankDigit);
    const suffixUnit = suffix;
    const result = calProgress + calBlankStr + percent + suffixUnit;

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
    return <span className={`${color} font-mono`}>:{result}</span>;
}




export default ProgressBar
