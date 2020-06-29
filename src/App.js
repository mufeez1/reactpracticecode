import React, { useState, useEffect } from 'react';
// import Parent from './parent.js';

import './App.css';
// import counterContext from './CounterContext.js';
// import Child2 from './child2.js';

function App() {
  let data = { title: "Waiting for Data" };
  const [todo, setTodo] = useState(data);
  // const [isData, setData] = useState(false);
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {

    async function fetchData() {
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("Response =", response);
      let data2 = await response.json();
      setTodo(data2);
      setFetching(false);
      console.log("Data =", todo);
      
    }
    fetchData();
  },[]);

  if (isFetching) {
    return <div>Data Loading.....</div>
  }
  return (
    <div >
      
      <span>Title: {todo.title}</span>
    </div>
  );













  // let countState=useState(30)
  // //let [count, setCount]=useState(30)
  // return (
  //   <counterContext.Provider value={countState}>
  //     <Parent />
  //     <Child2/>
  //   </counterContext.Provider>
  // );
}

export default App;
