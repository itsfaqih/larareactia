import React from 'react';
import classNames from 'classnames';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function NavbarItem({ active, text, href, className }) {
  const stateClass = classNames({
    'text-gray-900': active,
    'text-gray-500 hover:text-gray-900': !active
  });

  return (
    <InertiaLink href={href}>
      <span className={`${stateClass} ${className} px-3 py-2 rounded-md font-medium focus:outline-none focus:text-white focus:bg-gray-700`}>{text}</span>
    </InertiaLink>
  );
}