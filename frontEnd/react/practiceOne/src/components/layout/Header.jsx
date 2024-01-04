import React from "react";

const Header = () => {
    return (
        <header>
            <div className='navbar container'>
                <div className='flex-1'>
                    <a className='text-2xl font-bold'>
                        coco<span className='text-amber-500 text-3xl'>.</span>
                    </a>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <b className='hover:bg-transparent'>Home</b>
                        </li>
                        <li>
                            <a className='hover:bg-transparent'>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
