import React from "react";
import Allianz from "./../../assets/Allianz.svg";
import Deloitte from "./../../assets/Deloitte.svg";
import Disney from "./../../assets/Disney.svg";
import Huawei from "./../../assets/Huawei.svg";
import Hyundai from "./../../assets/Hyundai.svg";
import Jp from "./../../assets/JP.svg";
import SectionHeader from "../SectionHeader";
const SlidingCompanies = () => {
    return (
        <div className='pt-[150px] pb-8 bg-white dark:bg-gray-900 -mt-[1px]'>
            <SectionHeader
                title={"Meet our partners"}
                subtitle={"Our trusted companies"}
            />
            <div className='container pt-12 lg:pt-24 overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-16 after:h-full after:bg-gradient-to-r after:from-white dark:after:from-gray-900 after:to-transparent before:absolute before:top-0 before:right-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-gray-900 before:z-10'>
                <div className='animate-right-to-left flex gap-24 pb-8 md:pb-16'>
                    <img
                        className='w-40 md:w-auto'
                        src={Allianz}
                        alt='Allianz'
                    />
                    <img
                        className='w-40 md:w-auto'
                        src={Deloitte}
                        alt='Deloitte'
                    />
                    <img className='w-40 md:w-auto' src={Disney} alt='Disney' />
                    <img className='w-40 md:w-auto' src={Huawei} alt='Huawei' />
                    <img
                        className='w-40 md:w-auto'
                        src={Hyundai}
                        alt='Hyundai'
                    />
                    <img className='w-40 md:w-auto' src={Jp} alt='JP Morgan' />
                    <img
                        className='w-40 md:w-auto'
                        src={Allianz}
                        alt='Allianz'
                    />
                    <img
                        className='w-40 md:w-auto'
                        src={Deloitte}
                        alt='Deloitte'
                    />
                    <img className='w-40 md:w-auto' src={Disney} alt='Disney' />
                    <img className='w-40 md:w-auto' src={Huawei} alt='Huawei' />
                    <img
                        className='w-40 md:w-auto'
                        src={Hyundai}
                        alt='Hyundai'
                    />
                    <img className='w-40 md:w-auto' src={Jp} alt='JP Morgan' />
                </div>
                <div className='animate-left-to-right flex gap-24'>
                    <img
                        className='w-40 md:w-auto'
                        src={Deloitte}
                        alt='Deloitte'
                    />
                    <img className='w-40 md:w-auto' src={Jp} alt='JP Morgan' />
                    <img className='w-40 md:w-auto' src={Disney} alt='Disney' />
                    <img
                        className='w-40 md:w-auto'
                        src={Allianz}
                        alt='Allianz'
                    />
                    <img className='w-40 md:w-auto' src={Huawei} alt='Huawei' />
                    <img className='w-40 md:w-auto' src={Disney} alt='Disney' />
                    <img
                        className='w-40 md:w-auto'
                        src={Hyundai}
                        alt='Hyundai'
                    />
                    <img className='w-40 md:w-auto' src={Huawei} alt='Huawei' />
                    <img
                        className='w-40 md:w-auto'
                        src={Allianz}
                        alt='Allianz'
                    />
                    <img className='w-40 md:w-auto' src={Jp} alt='JP Morgan' />
                    <img
                        className='w-40 md:w-auto'
                        src={Hyundai}
                        alt='Hyundai'
                    />
                    <img
                        className='w-40 md:w-auto'
                        src={Deloitte}
                        alt='Deloitte'
                    />
                </div>
            </div>
        </div>
    );
};

export default SlidingCompanies;
