import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
// import { Grid } from '@material-ui/core';
// import counterContext from './CounterContext.js';
// import Parent from './parent.js';
// import Child2 from './child2.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();
return(
<div>
<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
<Button variant="outlined" color="primary">
  Hello
</Button>


</div>
);



























  //Fetch data in js through API
  // let data = { title: "Waiting for Data" };
  // const [todo, setTodo] = useState(data);
  // // const [isData, setData] = useState(false);
  // const [isFetching, setFetching] = useState(false);
  // useEffect(() => {

  //   async function fetchData() {
  //     setFetching(true);
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //     console.log("Response =", response);
  //     let data2 = await response.json();
  //     setTodo(data2);
  //     setFetching(false);
  //     console.log("Data =", todo);
      
  //   }
  //   fetchData();
  // });

  // if (isFetching) {
  //   return <div>Data Loading.....</div>
  // }
  // return (
  //   <div >
      
  //     <span>Title: {todo.title}</span>
  //   </div>
  // );


//context and reducer
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
