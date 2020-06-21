import React, { useState } from 'react';
import Parent from './parent.js';

import './App.css';
import counterContext from './CounterContext.js';
import Child2 from './child2.js';

function App() {
  let countState=useState(30)
  //let [count, setCount]=useState(30)
  return (
    <counterContext.Provider value={countState}>
      <Parent />
      <Child2/>
    </counterContext.Provider>
  );
}

export default App;
