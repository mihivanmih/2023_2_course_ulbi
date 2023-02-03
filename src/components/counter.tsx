import React, {useState} from 'react';
import style from './counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count+1)
    }

    return (
        <div className={style.block}>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    );
};

