import React from "react";

const Loader = () => {
    return (
        <div className='flex justify-center items-center p-24'>
            <div className='animate-spin w-8 h-8 rounded-full border-zinc-600 border-r-amber-400 border-4'></div>
        </div>
    );
};

export default Loader;
