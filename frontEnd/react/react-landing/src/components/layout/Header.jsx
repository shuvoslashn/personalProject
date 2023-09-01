import React, { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <header className='py-4 bg-white shadow-2xl shadow-black/10 fixed w-full'>
            <div className='container flex justify-between items-center'>
                {/* logo */}
                <h3 className='text-2xl font-semibold'>BatterStack.</h3>

                {/* hamburger */}
                <div className='w-8 inline-block md:hidden z-10' onClick={() => setToggle(!toggle)}>
                    {toggle ? (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`duration-300`}>
                            <path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <path d='M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z'></path>
                        </svg>
                    )}
                </div>

                {/* menu */}
                <nav
                    className={`${
                        toggle ? 'left-0 opacity-100 visible' : 'opacity-0 invisible -left-96 md:visible md:opacity-100'
                    } flex flex-col md:flex-row absolute md:static top-[64px] w-full h-[100vh] md:h-auto md:w-auto bg-gray-900 md:bg-transparent text-gray-400 md:text-gray-800 font-semibold pt-8 md:pt-0 gap-2 duration-500 transition-all text-center md:text-left`}
                >
                    <a className='px-8 md:px-4 py-2' href='/'>
                        Home
                    </a>
                    <a className='px-8 md:px-4 py-2' href='/'>
                        About
                    </a>
                    <a className='px-8 md:px-4 py-2' href='/'>
                        Features
                    </a>
                    <a className='px-8 md:px-4 py-2' href='/'>
                        Services
                    </a>
                    <a className='px-8 md:px-4 py-2' href='/'>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
