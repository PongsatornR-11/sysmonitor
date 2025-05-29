import React, { useState } from 'react'

const CopyTextBox = ({ textToCopy = 'This is the text to be copied', textToShow='Text to show', className='' }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const tempTextarea = document.createElement('textarea');
        try {
            tempTextarea.value = textToCopy;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
        } catch (error) {
            console.error('Error copying text: ', error);
        }

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500); // Reset copied state after 1.5 seconds
    }
    return (
        <div className={`${className} flex justify-between border rounded-lg p-1 w-fit`}>
            <pre className="overflow-x-auto">
                <code>
                    {textToShow}
                </code>
            </pre>
            <button
                onClick={handleCopy}
                disabled={copied == true ? 'disabled' : ''}
                className='ml-3 px-2 border rounded-lg text-sm hover:border transition-transform duration-200 cursor-pointer'
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyTextBox