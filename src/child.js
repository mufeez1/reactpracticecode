import React from 'react';
import { useContext } from 'react';
import counterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h1> this is first child</h1>
            <center>
            <h1> counter value is {counterValue[0]}</h1>
            <h4>Using CounterContext</h4>
            <button onClick={() => { counterValue[1](counterValue[0]++) }}>Increment</button>
            </center>
        </div>
    )
}
export default Child;