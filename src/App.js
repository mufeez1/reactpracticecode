import React from 'react';
import Paragraph from './paragraph.js';

import './App.css';

function App() {
  return (
    // <h1> Hello World</h1>
<div>
<Paragraph country="pakistan" city="sialkot"/>
<hr/>
<Paragraph country="KSA" city="Makkah"/>
<hr />
<Paragraph country="Canada" city="Victoria"/>
<hr />
</div>  );
}

export default App;
