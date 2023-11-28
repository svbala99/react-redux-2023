import React from "react";
import "./App.css";
import Calender from "./screens/Home";

const App = () => {

  return (
    <div style={styles.container} className="App">
      <Calender />
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
