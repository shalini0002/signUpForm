import React from 'react';

function Button({ type = 'button', onClick, text, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
