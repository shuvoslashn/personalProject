import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';

const App = () => {
    const [load, setLoad] = useState(false);
    const [myData, setMyData] = useState('');
    useEffect(() => {
        setLoad(true);
        const myData = () => {
            setTimeout(async () => {
                const res = await fetch('http://localhost:6060/');
                const data = await res.json();
                setMyData(data);

                console.log(data.message);
                setLoad(false);
            }, 2000);
        };
        myData();
    }, []);

    return (
        <div className='h-screen w-[100vw] flex justify-center items-center text-center'>
            {load ? (
                <>
                    <Loader />
                </>
            ) : (
                <>{myData.message}</>
            )}
        </div>
    );
};

export default App;
