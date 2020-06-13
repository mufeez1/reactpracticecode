import React from 'react';

import './App.css';
function Paragraph(props) {
    return (
        <div>
      <h1> Hello world from {props.counter} people</h1>
      {/* <h1> Hello {props.city} from all</h1> */}
      </div>
    );
  }
  
  export default Paragraph;