import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Navbar";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logotext="omkar-sh-boom songs"></Navbar>
      Hey Omkar
      <div className="value"> {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <Footer></Footer>
    </div>
  );
}

export default App;
