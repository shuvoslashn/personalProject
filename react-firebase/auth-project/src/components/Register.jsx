import React, { useEffect, useState } from "react";
import { auth } from "./../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [regData, setRegData] = useState({
        email: "",
        password: "",
        cpassword: "",
    });
    const [errState, setErrState] = useState("");
    const [successState, setSuccessState] = useState("");
    const handleChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value,
        });
    };
    const registerHandler = (e) => {
        e.preventDefault();
        setErrState("");
        setSuccessState("");
        if (!regData.email || !regData.password || !regData.cpassword) {
            setErrState("All fields are required");
            return;
        } else if (regData.password.length < 6) {
            setErrState("Password Must be 6 character long");
        } else if (regData.password !== regData.cpassword) {
            setErrState("Password Not Match");
            return;
        } else {
            setSuccessState("User created successfully");
            createUserWithEmailAndPassword(
                auth,
                regData.email,
                regData.password
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrState(errorMessage);
                });
            setTimeout(() => {
                setSuccessState("");
            }, 2000);
            console.log(regData);
        }
    };

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <form
                onSubmit={registerHandler}
                className='p-8 border border-zinc-700 max-w-lg space-y-4 rounded-xl'
            >
                <h2 className='text-3xl font-extralight'>Register</h2>
                <input
                    type='email'
                    placeholder='Email Address'
                    className='inputbox'
                    name='email'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='inputbox'
                    name='password'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    className='inputbox'
                    name='cpassword'
                    onChange={handleChange}
                />
                <button className='px-8 py-3 bg-indigo-500 hover:bg-indigo-600 duration-300 text-white rounded-md'>
                    Register Now
                </button>
                {errState && (
                    <div className='duration-300 px-4 py-2 text-red-400 bg-red-400/10 rounded-md'>
                        {errState}
                    </div>
                )}
                {successState && (
                    <div className='duration-300 px-4 py-2 text-green-400 bg-green-400/10 rounded-md'>
                        {successState}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
