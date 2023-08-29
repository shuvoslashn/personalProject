import React, { useContext } from 'react';
import { counterContext } from '../../context/Counter';

const Hero = () => {
    const counter = useContext(counterContext);

    const handleIncrease = () => {
        counter.setCount(counter.count + 1);
    };
    const handleDecrease = () => {
        counter.count > 0 && counter.setCount(counter.count - 1);
    };

    return (
        <div className='bg-gray-100 py-16'>
            <div className='container mx-auto flex justify-between items-center gap-8 md:gap-24 flex-col md:flex-row'>
                {/* left */}
                <div className='basis-1/2 text-center md:text-left px-8 md:px-0'>
                    <h5 className='text-2xl font-light text-blue-600'>Welcome to</h5>
                    <h1 className='text-5xl md:text-6xl font-black uppercase pb-3'>cocosoft</h1>
                    <p className='leading-[170%] text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ducimus, animi nam repudiandae
                        iste mollitia rem nemo dolor, officia culpa nobis, assumenda delectus similique voluptates?
                        Eaque corrupti laboriosam quasi nisi.
                    </p>
                    <div className='flex gap-4 mt-8 justify-center md:justify-start'>
                        <button
                            onClick={handleIncrease}
                            className='inline-block py-3 text-[14px] font-bold px-8 bg-blue-600 hover:bg-blue-700 duration-300 text-white uppercase shadow-lg rounded-full shadow-blue-300'
                        >
                            Increase
                        </button>
                        <button
                            onClick={handleDecrease}
                            className={`inline-block py-3 text-[14px] font-bold px-8 border  ${
                                counter.count > 0
                                    ? 'hover:bg-blue-700 border-blue-600 text-blue-600 hover:shadow-blue-300'
                                    : 'hover:bg-gray-400 border-gray-400 text-gray-400 hover:shadow-gray-300'
                            } duration-300  uppercase hover:shadow-lg rounded-full  hover:text-white`}
                        >
                            Decrease
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className='basis-1/2 flex gap-0 items-center px-8 md:px-0 justify-center'>
                    <img
                        className='w-6/12 -mr-24 z-10 rounded-3xl shadow-2xl '
                        src='https://images.unsplash.com/photo-1582736317407-371893d9e146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
                        alt=''
                    />
                    <img
                        className='w-8/12 z-0 rounded-3xl'
                        src='https://images.unsplash.com/photo-1582736317407-371893d9e146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
