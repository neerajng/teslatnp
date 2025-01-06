'use client';
import { useState } from 'react';
import { TeslaLogo } from '@/components/uicomponents/TeslaLogo';

export const Header = () => {
  // Define an array of navigation links
  const navItems = [
    { label: 'Landing', href: '/#landing' },
    { label: 'Models', href: '/models' },
    { label: 'Features', href: '/#features' },
    { label: 'Performance', href: '/#performance' },
    { label: 'Sustainability', href: '/#sustainability' },
  ];

  // Create a state to track the current active item
  const [activeNav, setActiveNav] = useState(navItems[0].label); // Default active item

  // Function to handle navigation item click
  const handleNavClick = (itemLabel) => {
    setActiveNav(itemLabel);
  };

  return (
    <header className='fixed z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-white px-8 pt-4 rounded-b-lg'>
      <nav className='w-full lg:flex lg:items-center lg:justify-between'>
        <div className='flex items-center justify-between'>
          <TeslaLogo />
          <div className='lg:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
              id='hs-navbar-example-collapse'
              aria-expanded='false'
              aria-controls='hs-navbar-example'
              aria-label='Toggle navigation'
              data-hs-collapse='#hs-navbar-example'
            >
              <svg
                className='hs-collapse-open:hidden shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='3' x2='21' y1='6' y2='6' />
                <line x1='3' x2='21' y1='12' y2='12' />
                <line x1='3' x2='21' y1='18' y2='18' />
              </svg>
              <svg
                className='hs-collapse-open:block hidden shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
              <span className='sr-only'>Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id='hs-navbar-example'
          className='hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block'
          aria-labelledby='hs-navbar-example-collapse'
        >
          <div className='flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`text-xs underline-none font-medium px-2 py-1 rounded-sm ${
                  activeNav === item.label
                    ? 'text-black '
                    : 'text-black hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500'
                }`}
                aria-current={activeNav === item.label ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
