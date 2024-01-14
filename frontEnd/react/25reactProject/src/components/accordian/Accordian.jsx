import { useState } from "react";
import { data } from "./data";

export default function Accordian() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-white/5 m-24 p-8'>
            {data.map((myData) => {
                return (
                    <div
                        key={myData.id}
                        className='p-8 bg-white/5'
                        onClick={(e) => setToggle()}
                    >
                        <h2 id={myData.id} className='text-2xl'>
                            {myData.question}
                        </h2>
                        {toggle ? (
                            <p className='mt-3 leading-7 font-light'>
                                {myData.answer}
                            </p>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
