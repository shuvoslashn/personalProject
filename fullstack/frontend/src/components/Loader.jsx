import React from 'react';

const Loader = () => {
    return (
        <div className='relative animate-spin'>
            <div className='w-12 h-12 bg-red-300 rounded-full absolute top-0 left-4'></div>
            <div className='w-12 h-12 bg-amber-300 rounded-full absolute top-0 -left-4'></div>
            <div className='w-12 h-12 bg-blue-300 rounded-full absolute top-8 left-0'></div>
        </div>
    );
};

export default Loader;
