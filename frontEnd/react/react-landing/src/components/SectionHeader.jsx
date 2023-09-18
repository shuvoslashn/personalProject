import React from "react";

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div>
            <div className='container text-center pb-0'>
                <p className='text-lg md:text-2xl font-bold text-purple-600 pb-3'>
                    {subtitle}
                </p>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold'>
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default SectionHeader;
