import { useState } from "react";

const App = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        setData([...data, payload]);
        console.log(payload);
        // console.log(formData);

        // console.log(e.target);
        // setData([...data, { userName, email }]);
        // setUserName("");
        // setEmail("");
    };

    const handleReset = () => {
        setData([]);
    };

    return (
        <div className='bg-zinc-900 text-zinc-400 h-screen w-full flex justify-center items-center flex-col gap-16'>
            <form
                className='p-8 bg-zinc-800 max-w-xl w-full'
                onSubmit={handleSubmit}
            >
                <h1 className='text-4xl pb-8 font-extralight'>Demo Form</h1>
                <div className='flex flex-col gap-2 pb-4'>
                    <label htmlFor='userName'>Your Name</label>
                    <input
                        type='text'
                        id='userName'
                        name='userName'
                        className='input'
                        placeholder='eg. Shuvo Sarker'
                        // onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2 pb-4'>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        className='input'
                        placeholder='eg. demo@gmail.com'
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex gap-4 mt-4'>
                    <button
                        className='px-4 py-3 inline-block bg-teal-700 text-white hover:bg-opacity-80 duration-300'
                        type='submit'
                        // onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className='px-4 py-3 inline-block bg-transparent border border-zinc-600 hover:border-transparent hover:bg-zinc-950 duration-300 text-white'
                        type='reset'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div className='p-8 bg-teal-900 max-w-xl w-full text-white'>
                <h1 className='text-2xl pb-3 font-extralight'>Submited Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th className='border px-8 py-3'>Name</th>
                            <th className='border px-8 py-3'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td className='border px-8 py-3'>
                                        {element.userName}
                                    </td>
                                    <td className='border px-8 py-3'>
                                        {element.email}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
