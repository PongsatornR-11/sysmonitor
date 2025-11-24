import './RainbowButton.css';

/**
 * A button component with a rainbow border animation on hover/press.
 * Requires custom CSS for the animation (see step 2).
 */
const RainbowButton = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`
        group relative inline-flex items-center justify-center 
        p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium 
        text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-900 
        focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
        ${className}
      `}
        >
            {/* Pseudo-element for the animated rainbow border/background */}
            <span className="absolute inset-0 rainbow-border-anim"></span>

            {/* Inner span for the button content and solid background */}
            <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 
                   bg-white dark:bg-gray-900 rounded-md 
                   group-hover:bg-opacity-0 dark:group-hover:bg-opacity-0
                   group-active:bg-opacity-0 dark:group-active:bg-opacity-0
                   text-gray-900 dark:text-white"
            >
                {children || 'โหมด AI'}
            </span>
        </button>
    );
};

export default RainbowButton;