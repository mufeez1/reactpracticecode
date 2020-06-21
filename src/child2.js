import React, { useReducer } from 'react';
import CountReducer from './countReducer.js'
const Child2 = ()=>{
    let[state , dispatch]= useReducer(CountReducer , 10)
    return(
        <div>
            <center>
        <h1> value of initial reducer is : {state}</h1>
        <h4>Using countReducer</h4>
<button onClick={()=>dispatch('INCREMENT')}>Increment Reduce</button>

<button onClick={()=>dispatch('DECREMENT')}>Decrement Reduce</button>
</center>
        </div>
    )
}
export default Child2;