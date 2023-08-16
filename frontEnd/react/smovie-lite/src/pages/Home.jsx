import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Home = () => {
    const name = useContext(AppContext);
    return (
        <div>
            <h1>Home {name}</h1>
        </div>
    );
};

export default Home;
