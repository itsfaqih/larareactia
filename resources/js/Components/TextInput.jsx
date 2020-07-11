import React from 'react';
import classNames from 'classnames';

export default function TextInput({ containerClass, inputClass, error, ...props }) {
  const errorClass = classNames({'shadow-outline-red border-red-300 z-10': error});

  return (
    <div className={`${containerClass} flex flex-col`}>
      <input aria-label="Password" {...props} className={`${inputClass} ${errorClass} relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`} />
    </div>
  );
}