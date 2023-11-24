import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { triggerIncrementRequest, triggerDecrementRequest } from "./redux/actions/countAction";
import { FETCH_POSTS_REQUEST, fetchPostsRequest, fetchPostsSuccess } from "./redux/actions/postAction";
import { fetchPhotoRequest } from "./redux/actions/photoAction";


const App = () => {
  const dispatch = useDispatch();
  const makeApiCall = async()=>{
    try{
      const payload = {
        title: 'foo',
      body: 'bar',
      userId: 1,
      }
      dispatch(fetchPostsRequest(payload));
      dispatch(fetchPostsSuccess())
    }
    catch(e){
      console.error(e)
    }
  }

  const makePhotoApiCall = ()=>{
    try{
      dispatch(fetchPhotoRequest())

    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    makeApiCall();
    makePhotoApiCall();
  },[])
  const countFromRedux = useSelector((state) => state.count);
  const photoFromRedux = useSelector((state) => state.photo);

  console.log(photoFromRedux)

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
      {
        photoFromRedux?.data?.map(i=>{
          return <div>
            <img src={i?.thumbnailUrl} />
          </div>
        })
      }
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
