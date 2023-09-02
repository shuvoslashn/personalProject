import React, { useEffect, useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <header className='py-4 bg-white/30 dark:bg-gray-900/90 backdrop-blur-[8px] fixed w-full shadow-2xl shadow-black/10 dark:shadow-black/20 z-50'>
            <div className='container flex justify-between items-center'>
                {/* logo */}
                <h3 className='text-2xl font-semibold'>BatterStack.</h3>

                {/* mobile menu */}
                <div className='flex gap-4'>
                    {/* switcher */}
                    {theme === 'light' ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='w-6 ml-4 cursor-pointer inline-block md:hidden animate-spin-slow'
                            onClick={handleTheme}
                        >
                            <path d='M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'></path>
                        </svg>
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='w-6 ml-4 cursor-pointer inline-block md:hidden'
                            onClick={handleTheme}
                        >
                            <path
                                className='fill-white'
                                d='M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z'
                            ></path>
                        </svg>
                    )}

                    {/* hamburger */}
                    <div className='w-8 inline-block md:hidden z-10' onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={`duration-300`}>
                                <path
                                    className='fill-gray-900 dark:fill-white'
                                    d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'
                                ></path>
                            </svg>
                        ) : (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path
                                    className='fill-gray-900 dark:fill-white'
                                    d='M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z'
                                ></path>
                            </svg>
                        )}
                    </div>
                </div>

                {/* menu */}
                <nav
                    className={`${
                        toggle ? 'left-0 opacity-100 visible' : 'opacity-0 invisible -left-96 md:visible md:opacity-100'
                    } flex flex-col md:flex-row absolute md:static top-[64px] w-full h-[100vh] md:h-auto md:w-auto bg-gray-100/90 dark:bg-gray-950/90 md:bg-transparent dark:md:bg-transparent text-gray-800 dark:text-gray-200 md:text-gray-800 md:dark:text-white font-semibold pt-8 md:pt-0 gap-2 duration-500 transition-all text-center md:text-left`}
                >
                    <a
                        className='px-8 md:px-4 py-2 inline-block after:absolute after:w-0 hover:after:w-full duration-300 transition-all after:duration-300 after:h-5 after:bg-purple-600/20 dark:after:bg-white/10 after:left-0 after:bottom-0 after:z-0 z-10 relative'
                        href='/'
                    >
                        Home
                    </a>
                    <a
                        className='px-8 md:px-4 py-2 inline-block after:absolute after:w-0 hover:after:w-full duration-300 transition-all after:duration-300 after:h-5 after:bg-purple-600/20 dark:after:bg-white/10 after:left-0 after:bottom-0 after:z-0 z-10 relative'
                        href='/'
                    >
                        About
                    </a>
                    <a
                        className='px-8 md:px-4 py-2 inline-block after:absolute after:w-0 hover:after:w-full duration-300 transition-all after:duration-300 after:h-5 after:bg-purple-600/20 dark:after:bg-white/10 after:left-0 after:bottom-0 after:z-0 z-10 relative'
                        href='/'
                    >
                        Features
                    </a>
                    <a
                        className='px-8 md:px-4 py-2 inline-block after:absolute after:w-0 hover:after:w-full duration-300 transition-all after:duration-300 after:h-5 after:bg-purple-600/20 dark:after:bg-white/10 after:left-0 after:bottom-0 after:z-0 z-10 relative'
                        href='/'
                    >
                        Services
                    </a>
                    <a
                        className='px-8 md:px-4 py-2 inline-block after:absolute after:w-0 hover:after:w-full duration-300 transition-all after:duration-300 after:h-5 after:bg-purple-600/20 dark:after:bg-white/10 after:left-0 after:bottom-0 after:z-0 z-10 relative'
                        href='/'
                    >
                        Contact
                    </a>
                    <div className='px-8 md:px-4 py-2 md:inline-block hidden'>
                        {/* switcher */}
                        {theme === 'light' ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                className='w-6 cursor-pointer animate-spin-slow'
                                onClick={handleTheme}
                            >
                                <path d='M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                className='w-6 cursor-pointer'
                                onClick={handleTheme}
                            >
                                <path
                                    className='fill-white'
                                    d='M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z'
                                ></path>
                            </svg>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
