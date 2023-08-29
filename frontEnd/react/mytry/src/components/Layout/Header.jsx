import React, { useContext } from 'react';
import { counterContext } from '../../context/Counter';

const Header = () => {
    const counter = useContext(counterContext);
    return (
        <header className='py-3 shadow-2xl shadow-[#0002] fixed w-full z-50 bg-white top-0'>
            <div className='container mx-auto flex justify-between items-center px-8 sm:px-0'>
                <h3 className='text-3xl font-semibold flex gap-4 items-center'>
                    <span className='w-4 h-4 bg-blue-600 block relative after:absolute after:w-2 after:h-2 after:bg-amber-400 after:z-0 z-10 after:-right-2'></span>{' '}
                    <span className='mb-2'>coco</span>
                </h3>

                {/* menu */}
                <ul className='hidden sm:flex gap-8'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Services</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                    <li>
                        <a href='#'>Item: {counter.count}</a>
                    </li>
                </ul>

                {/* menu icon */}
                <div className='flex sm:hidden flex-col gap-[6px] items-end'>
                    <div className='w-5 h-[1px] bg-black'></div>
                    <div className='w-4 h-[1px] bg-black'></div>
                    <div className='w-3 h-[1px] bg-black'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
