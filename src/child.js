import React from 'react';
import { useContext } from 'react';
import counterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h1> this is first cild</h1>
            <h1> counter value is {counterValue[0]}</h1>
            <button onClick={()=>{counterValue[1](counterValue[0]++)}}>Increment</button>
        </div>
    )
}
export default Child;