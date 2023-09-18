import React from "react";

const SingleFeatures = ({ css }) => {
    return (
        <div
            className={`${css} hover:-mt-4 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-indigo-500/10 dark:shadow-transparent p-8 dark:bg-gray-600/10 dark:hover:bg-indigo-500 group cursor-pointer`}
        >
            <div className='w-12'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path
                        className='fill-indigo-500 dark:group-hover:fill-white'
                        d='M3.16113 4.46924C5.58508 2.04529 9.44716 1.93599 12.0008 4.14133C14.5528 1.93599 18.4149 2.04529 20.8388 4.46924C23.2584 6.88884 23.3716 10.7414 21.1785 13.2952L13.4142 21.0862C12.6686 21.8318 11.4809 21.8657 10.6952 21.1879L10.5858 21.0862L2.82141 13.2952C0.628282 10.7414 0.741522 6.88884 3.16113 4.46924ZM4.57534 5.88345C2.86819 7.5906 2.81942 10.3281 4.42902 12.0942L4.57534 12.2474L12 19.672L17.3026 14.368L13.7677 10.8332L12.7071 11.8939C11.5355 13.0654 9.636 13.0654 8.46443 11.8939C7.29286 10.7223 7.29286 8.82279 8.46443 7.65122L10.5656 5.54872C8.85292 4.17762 6.37076 4.24042 4.7286 5.73712L4.57534 5.88345ZM13.0606 8.71188C13.4511 8.32135 14.0843 8.32135 14.4748 8.71188L18.7168 12.9538L19.4246 12.2474C21.1819 10.4901 21.1819 7.64081 19.4246 5.88345C17.7174 4.1763 14.9799 4.12752 13.2139 5.73712L13.0606 5.88345L9.87864 9.06543C9.51601 9.42806 9.49011 9.99991 9.80094 10.3924L9.87864 10.4796C10.2413 10.8423 10.8131 10.8682 11.2056 10.5573L11.2929 10.4796L13.0606 8.71188Z'
                    ></path>
                </svg>
            </div>
            <div className=''>
                <h3 className='text-xl md:text-3xl font-bold py-4'>Reliable</h3>
                <p className='md:text-lg leading-[170%] dark:group-hover:text-white'>
                    Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                    Nesciunt voluptatibus.
                </p>
            </div>
        </div>
    );
};

export default SingleFeatures;
