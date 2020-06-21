import React, { useState } from 'react';
import Parent from './parent.js';

import './App.css';
import counterContext from './CounterContext.js';

function App() {
  let countState=useState(30)
  //let [count, setCount]=useState(30)
  return (
    <counterContext.Provider value={countState}>
      <Parent />
    </counterContext.Provider>
  );
}

export default App;
