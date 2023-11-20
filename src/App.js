import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { triggerIncrementRequest, triggerDecrementRequest } from "./redux/actions/countAction";
=======
import { triggerIncrementRequest } from "./redux/actions/countAction";
import { fetchPostsRequest } from "./redux/actions/postAction";

>>>>>>> dev

const App = () => {
  const dispatch = useDispatch();
  const makeApiCall = async()=>{
    try{
      dispatch(fetchPostsRequest());
    }
    catch(e){
      console.error(e)
    }
  }
  useEffect(()=>{
    makeApiCall();
  },[])
  const countFromRedux = useSelector((state) => state.count);
  const { number, loading } = countFromRedux;

  const handleIncrement = () => {
    dispatch(triggerIncrementRequest());
  };

  const handleDecrement = () => {
    dispatch(triggerDecrementRequest())
  };

  return (
    <div style={styles.container} className="App">
      <button style={styles.btn} onClick={handleIncrement}>
        +
      </button>
      {loading ? <h1>Count</h1> : <h1 style={styles.m48}>{number}</h1>}
      <button style={styles.btn} onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  btn: { width: 48, height: 48, borderRadius: 24 },
  m48: { margin: 48 },
};

export default App;
