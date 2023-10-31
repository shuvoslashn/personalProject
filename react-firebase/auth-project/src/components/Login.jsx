import React from "react";

const Login = () => {
    const formHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <form
                onSubmit={formHandler}
                className='p-8 border border-zinc-700 max-w-lg space-y-4 rounded-xl'
            >
                <h2 className='text-3xl font-extralight'>Login</h2>
                <input
                    type='email'
                    placeholder='Email Address'
                    className='inputbox'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='inputbox'
                />
                <button className='px-8 py-3 bg-indigo-500 hover:bg-indigo-600 duration-300 text-white rounded-md'>
                    Login Now
                </button>
            </form>
        </div>
    );
};

export default Login;
