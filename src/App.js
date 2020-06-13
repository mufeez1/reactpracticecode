import React,{useState} from 'react';
import Paragraph from './paragraph.js';

import './App.css';

function App() {
  let [count,setcount]=useState(1);
  let[isMorning,setMorning]=useState(true);
  return (
    // <h1> Hello World</h1>
<div className={`box ${isMorning ? 'dayLight':'NighLight'}`}>
  <h2>Time : {isMorning?'morning':'night'}</h2>
  <Paragraph counter={count}/>
  <br/>
  <button onClick={()=> setcount(++count)}>Add People</button>
  <button onClick={()=> setMorning(!isMorning)}>Change Time</button>
{/* <Paragraph country="pakistan" city="sialkot"/>
<hr/>
<Paragraph country="KSA" city="Makkah"/>
<hr />
<Paragraph country="Australia" city="Victoria"/>
<hr /> */}
</div>  );
}

export default App;
