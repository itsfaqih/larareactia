import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function LinkButton({ href, text, className }) {
  return (
    <InertiaLink href={href}>
      <span className={`inline-flex rounded-md shadow-sm ${className}`}>
        <span className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
          {text}
        </span>
      </span>
    </InertiaLink>
  );
}