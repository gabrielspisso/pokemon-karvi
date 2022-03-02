import React, { FunctionComponent } from 'react';

type BlackButtonProps = {
    text: string;
    onClick: Function;
};

const BlackButton: FunctionComponent<BlackButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            type="button"
            className="text-white 
                    bg-gray-800 
                    hover:bg-gray-900 
                    focus:ring-4 
                    focus:ring-gray-300 
                    font-medium rounded-lg text-xl 
                    px-5 py-2.5 
                    text-center 
                    mr-2 mb-2 
                    dark:bg-gray-800 
                    dark:hover:bg-gray-700 
                    dark:focus:ring-gray-800 
                    dark:border-gray-700"
        >
            {text}
        </button>
    );
};

export default BlackButton;