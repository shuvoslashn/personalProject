import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

const App = () => {
    const counterContext = useContext(CounterContext);
    return (
        <div className='flex justify-center items-center h-screen w-full flex-col'>
            <h1 className='text-8xl font-bolder'>{counterContext.count}</h1>
            <div className='flex gap-4 pt-16'>
                <button className='px-8 py-4 bg-teal-600 shadow-teal-600 shadow-2xl text-white rounded-md hover:bg-teal-700 duration-300'>
                    Increment
                </button>
                <button className='px-8 py-4 bg-rose-500 shadow-rose-500 shadow-2xl text-white rounded-md hover:bg-rose-600 duration-300'>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default App;
