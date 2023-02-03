import React, {useState} from 'react';
import './counter.scss'

export const Counter = () => {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count+1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    );
};

