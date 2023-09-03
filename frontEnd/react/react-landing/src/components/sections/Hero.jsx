import React from 'react';
import rotateLogo from './../../assets/rotate.png';

const Hero = () => {
    return (
        <section className=' h-screen pt-[70px] bg-white dark:bg-gray-900 w-full'>
            <div className='container w-full h-full flex justify-center items-center'>
                <div className='relative text-center max-w-[940px]'>
                    {/* Effects */}
                    <div className='w-40 h-40 bg-purple-600/80 rounded-full blur-3xl absolute -top-20 left-0 -z-0 animate-pulse'></div>
                    <div className='w-40 h-40 bg-rose-600/40 rounded-full blur-3xl absolute -bottom-20 -right-0 -z-0 animate-pulse'></div>
                    <img
                        src={rotateLogo}
                        alt='rotate text'
                        className='w-40 absolute right-24 -top-32 animate-spin-slow'
                    />

                    {/* Elements */}
                    <h3 className='text-xl md:text-3xl font-bold text-purple-600 pb-3'>Welcome to BatterStack</h3>
                    <h1 className='text-4xl md:text-6xl lg:text-8xl font-extrabold'>
                        <span className='font-outline-1 dark:font-outline-white-1 text-transparent'>World of </span>{' '}
                        <span>Machine</span>
                    </h1>
                    <p
                        style={{ lineHeight: '180%' }}
                        className='text-md md:text-xl my-4 text-gray-800 dark:text-gray-400'
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam qui excepturi officia
                        veniam nostrum nobis voluptatem adipisci.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-8'>
                        <a href='/' className='btn'>
                            Get Started
                        </a>
                        <a href='https://youtube.com' className='flex items-center gap-4 dark:text-white'>
                            <div className='w-[55px] h-[55px] dark:bg-white bg-gray-800 rounded-full after:absolute relative after:w-full after:h-full after:top-0 after:left-0 dark:after:bg-white/40 after:bg-gray-800/20 after:animate-ping after:rounded-full flex justify-center items-center pr-[1px]'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-8'>
                                    <path
                                        className='dark:fill-purple-500 fill-white'
                                        d='M19.376 12.4158L8.77735 19.4816C8.54759 19.6348 8.23715 19.5727 8.08397 19.3429C8.02922 19.2608 8 19.1643 8 19.0656V4.93408C8 4.65794 8.22386 4.43408 8.5 4.43408C8.59871 4.43408 8.69522 4.4633 8.77735 4.51806L19.376 11.5838C19.6057 11.737 19.6678 12.0474 19.5146 12.2772C19.478 12.3321 19.4309 12.3792 19.376 12.4158Z'
                                    ></path>
                                </svg>
                            </div>
                            <span>Watch Videos</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
