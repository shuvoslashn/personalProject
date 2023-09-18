import React from "react";
import SectionHeader from "../SectionHeader";
import serviceData from "./../../data/service";

const Services = () => {
    return (
        <section
            id='services'
            className='pt-[100px] dark:bg-gray-900 -mt-[1px]'
        >
            <SectionHeader
                title={"Choose as you want"}
                subtitle={"Check our services"}
            />
            <div className='container pt-8 lg:pt-16'>
                <div className='flex gap-8 flex-wrap'>
                    {serviceData.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className='p-8 bg-white dark:bg-gray-600/20 rounded-3xl hover:z-10 hover:scale-110 hover:rotate-3 dark:hover:bg-indigo-500 duration-300 shadow-2xl shadow-gray-800/10 basis-1/2 md:basis-1/3 lg:basis-1/4 flex-grow'
                            >
                                <h3 className='text-2xl font-bold pb-4'>
                                    {data.name}
                                </h3>
                                <p className='pb-4 dark:text-white/50'>
                                    {data.desc.substring(0, 150)}{" "}
                                    {data.desc.length > 150 ? "..." : ""}
                                </p>
                                <div className='flex justify-between items-center'>
                                    <span className='font-bold dark:text-white/60'>
                                        {data.price} Taka
                                    </span>
                                    <span className='font-bold dark:text-white/60'>
                                        Rating: {data.star}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
