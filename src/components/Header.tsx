import React from 'react';

const Header = () => {
  return (
    <header>
      <nav
        className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          >
            Select your appointment time.
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;