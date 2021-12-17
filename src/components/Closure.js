import React, { useEffect, useState, useCallback } from 'react';

const Closure = () => {
    const [count, setCount] = useState('1');


    const incrementCount = useCallback(
        () => {
            setCount(prevCount => +prevCount + 1);
        }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            incrementCount();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [incrementCount]);
    return <div>{`Timer started: ${count}`}</div>;
};


export default Closure;