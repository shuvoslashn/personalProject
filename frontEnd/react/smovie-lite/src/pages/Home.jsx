import React from 'react';
import { useGlobalContext } from '../context/context';

const Home = () => {
    const name = useGlobalContext();
    return (
        <div>
            <h1>Home {name}</h1>
        </div>
    );
};

export default Home;
