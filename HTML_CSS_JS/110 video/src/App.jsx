import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todo, setTodo] = useState(
    {
      title: "hello",
      desc: "world",
    },
    {
      title: "omkar",
      desc: "buzy",
    },
    {
      title: "hari",
      desc: "buzy",
    }
  );

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn ? <button>Showbtn true</button> : <button>Showbtn false</button>} */}
      {/* if show btn is true then show this only  */}
      {showbtn && <button>Showbtn enable</button>}
      <div className="card">
        {todo.map((item, index) => (
          <Todo todo={item} key={index} />
        ))}

        <button onClick={() => setshowbtn(!showbtn)}>count is {count}</button>
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
