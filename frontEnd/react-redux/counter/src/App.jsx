import React from 'react';
import Counter from './Counter';
import { useDispatch } from 'react-redux';
import { barani, komani } from './features/counter/counterSlice';

const App = () => {
    const dispatch = useDispatch();

    const handleBarani = () => {
        dispatch(barani());
    };
    const handleKomani = () => {
        dispatch(komani());
    };

    return (
        <div>
            <h1 className='text-2xl p-4 text-center bg-gray-900 text-white'>React & Redux</h1>
            <div className='min-h-[85vh] w-full flex flex-col justify-center items-center'>
                <Counter classes={`text-white font-bold text-7xl`} />
                <div className='flex gap-3 mt-8'>
                    <button
                        onClick={handleBarani}
                        className='bg-gradient-to-tr from-green-500 to-teal-500 rounded-lg px-8 text-2xl hover:opacity-80 duration-150 font-semibold py-3 shadow-2xl shadow-green-500/75 text-white'
                    >
                        Baraw
                    </button>
                    <button
                        onClick={handleKomani}
                        className='bg-gradient-to-tr from-red-500 to-purple-500 rounded-lg px-8 text-2xl hover:opacity-80 duration-150 font-semibold py-3 shadow-2xl shadow-red-500/75 text-white'
                    >
                        Komaw
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
