import React, { useState } from "react";
import Display from "./Display";

const Form = () => {
    const [savedData, setSavedData] = useState([]);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    });

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = () => {
        setSavedData([...savedData, formData.username = '' ]);
    };

    return (
        <div className='container'>
            <div className='max-w-xl my-8 w-full mx-auto flex gap-2'>
                <input
                    type='text'
                    placeholder='Name'
                    className='px-4 py-2 inline-block  rounded-sm bg-white/20 placeholder:text-zinc-400 text-white'
                    name='username'
                    onChange={handleForm}
                />
                <input
                    type='email'
                    placeholder='email'
                    className='px-4 py-2 inline-block  rounded-sm bg-white/20 placeholder:text-zinc-400 text-white'
                    name='email'
                    onChange={handleForm}
                />
                <button
                    onClick={handleSubmit}
                    className='px-4 py-2 bg-teal-800 hover:opacity-80 duration-150 text-white flex-grow  rounded-sm'
                >
                    Add
                </button>
            </div>

            <Display savedData={savedData} />
        </div>
    );
};

export default Form;
