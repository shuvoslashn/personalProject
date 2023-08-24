import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-4 shadow-xl shadow-gray-100'>
            <div className='w-[90vw] mx-auto flex justify-between items-center'>
                {/* logo */}
                <h2 className='text-xl font-light'>
                    <i className='bx bxl-redux mr-2' />
                    React Redux
                </h2>
                <div className='flex space-x-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Cart</Link>
                    <p>items: 0</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
