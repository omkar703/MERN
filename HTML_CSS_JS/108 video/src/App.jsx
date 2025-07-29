import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  // // we use useEffect to run a function only once
  // useEffect(() => {
  //   alert("Hey there first render ");
  // }, []);

  // we use useEffect to run a function every time count changes
  useEffect(() => {
    alert("Hey there count is changed ");
    setColor(color + 1);
  }, [count]);

  // // run on every render
  // useEffect(() => {
  //   alert("Hey there every render ");
  // });

  useEffect(() => {
    alert("Hey there second render ");

    return () => {
      alert("component was unmounted");
    };
  }, []);

  return (
    <>
      <div>
        {/* <Navbar color={"blue" + "green" + color} /> */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
