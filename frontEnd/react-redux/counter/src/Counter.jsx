import React from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ classes }) => {
    const count = useSelector((state) => state.counter.count);

    return <div className={classes}>Count: {count}</div>;
};

export default Counter;
