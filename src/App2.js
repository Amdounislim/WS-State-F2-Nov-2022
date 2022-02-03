import React, { useState, useEffect } from 'react';
import './App.css'

const App2 = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log("Effect");
    }, [count, show]);


    return <div className='App'>
        <button onClick={() => setShow(!show)} >Show</button>
        {show && (<div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)} >-</button>
        </div>)}
    </div>;
};

export default App2;
