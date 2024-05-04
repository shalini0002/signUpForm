import React from 'react';

function Input({ label, name, type = 'text', placeholder, value, onChange, className }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-white mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
      />
    </div>
  );
}

export default Input;
