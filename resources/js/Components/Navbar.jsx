import React, { useState } from 'react';
import classNames from 'classnames';
import NavbarItem from './NavbarItem';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import LinkButton from './LinkButton';

export default function Navbar() {
  const { auth } = usePage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownClass = classNames({
    'transform opacity-100 scale-100 transition ease-in duration-75': isDropdownOpen,
    'transform opacity-0 scale-95 transition ease-out duration-100': !isDropdownOpen
  });

  const handleDropdown = () => setDropdownOpen(value => !value);
  const handleMobileMenu = () => setMobileMenuOpen(value => !value);

  return (
    <div>
      <nav className="bg-white border-b-2 border-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <InertiaLink href={route('welcome')}>
                <div className="text-xl font-semibold text-indigo-600">
                  LaraReactia
                </div>
              </InertiaLink>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  {auth.user ?
                    <>
                      <div className="flex items-center">
                        <NavbarItem text="Home" href={route('home')} className="mr-3" />
                        <button onClick={handleDropdown} className="flex items-center max-w-xs text-gray-500 hover:text-gray-900 focus:outline-none" id="user-menu" aria-label="User menu" aria-haspopup="true">
                          <div className="py-3 font-medium leading-none">{auth.user.name}</div>
                          {isDropdownOpen ?
                            <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 15l7-7 7 7"></path></svg>
                            :
                            <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
                          }
                        </button>
                      </div>
                      <div className={`absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg ${dropdownClass}`}>
                        <div className="py-1 bg-white rounded-md shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                          <InertiaLink href={route('logout')} method="post" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</InertiaLink>
                        </div>
                      </div>
                    </>
                    :
                    <div>
                      <div className="flex items-baseline">
                        <NavbarItem text="Login" href={route('login')} />
                        <LinkButton text="Register" href={route('register')} className="ml-3" />
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">

              <button onClick={handleMobileMenu} className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700">

                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} w-6 h-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-6 h-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          {auth.user ?
            <>
              <div className="px-2 pt-2 pb-3 sm:px-3">
                <NavbarItem text="Home" href={route('home')} className="block" />
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col px-5">
                  <div className="text-base font-medium leading-none text-gray-700">{auth.user.name}</div>
                  <div className="mt-1 text-sm font-medium leading-none text-indigo-500">{auth.user.email}</div>
                </div>
                <div className="px-2 mt-3">
                  <InertiaLink href={route('logout')} method="post" className="block px-3 py-2 mt-1 text-base font-medium text-gray-600 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100">Sign out</InertiaLink>
                </div>
              </div>
            </>
            :
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <NavbarItem text="Login" href={route('login')} className="block" />
              <NavbarItem text="Register" href={route('register')} className="block mt-1" />
            </div>
          }
        </div>
      </nav>
    </div>
  );
}