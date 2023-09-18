import React from "react";
import SectionHeader from "../SectionHeader";

const Contact = () => {
    return (
        <section
            id='contact'
            className='pb-24 pt-32 dark:bg-gray-900 -mt-[1px]'
        >
            <div className='container'>
                <SectionHeader
                    title={"Take Support"}
                    subtitle={"Feel Free to contact us"}
                />
                <div className='pt-8 lg:pt-16'>
                    <div className='flex gap-8 flex-wrap'>
                        <a
                            href='tel:01729517615'
                            className='relative after:absolute after:bg-indigo-500 after:w-16 after:h-16 after:top-0 after:right-0 after:blur-3xl overflow-hidden p-8 bg-white dark:bg-gray-600/20 rounded-3xl hover:z-10 hover:scale-105 dark:hover:bg-indigo-500 duration-300 shadow-2xl shadow-gray-800/10 basis-1/2 md:basis-1/3 lg:basis-1/4 flex-grow'
                        >
                            <h3 className='text-2xl font-bold pb-4'>Phone</h3>
                            <p className='pb-4 dark:text-white/50'>
                                017-xxxx-xxxx
                            </p>
                        </a>
                        <a
                            href='mailto:dev.shuvosarker@gmail.com'
                            className='relative after:absolute after:bg-indigo-500 after:w-16 after:h-16 after:top-0 after:right-0 after:blur-3xl overflow-hidden p-8 bg-white dark:bg-gray-600/20 rounded-3xl hover:z-10 hover:scale-105 dark:hover:bg-indigo-500 duration-300 shadow-2xl shadow-gray-800/10 basis-1/2 md:basis-1/3 lg:basis-1/4 flex-grow'
                        >
                            <h3 className='text-2xl font-bold pb-4'>Email</h3>
                            <p className='pb-4 dark:text-white/50'>
                                dev.shuvosarker@gmail.com
                            </p>
                        </a>
                        <a
                            href='tel:01729517615'
                            className='relative after:absolute after:bg-indigo-500 after:w-16 after:h-16 after:top-0 after:right-0 after:blur-3xl overflow-hidden p-8 bg-white dark:bg-gray-600/20 rounded-3xl hover:z-10 hover:scale-105 dark:hover:bg-indigo-500 duration-300 shadow-2xl shadow-gray-800/10 basis-1/2 md:basis-1/3 lg:basis-1/4 flex-grow'
                        >
                            <h3 className='text-2xl font-bold pb-4'>Address</h3>
                            <div>
                                <div className='pb-4 dark:text-white/50'>
                                    <p>209/2 Promukto ekota</p>
                                    <p>North Bagbari, Sylhet</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
