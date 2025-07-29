import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data);
  };
  // it is use to run things repetatly
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div>
      <button
        onClick={getData}
        className="bg-blue-900 text-white rounded-lg p-5 hover:bg-blue-700 px-10 py-2 active:scale-95 transition-all duration-300"
      >
        Click me
      </button>
      <div class="bg-blue-800 text-white rounded-lg p-5 hover:bg-blue-500 px-10 py-2 active:scale-95 transition-all duration-300 flex flex-col gap-16">
        {data.map((elum, idx) => {
          return (
            <h1
              key={idx}
              className="bg-black text-white rounded-lg p-5 hover:bg-blue-500 px-10 py-2 active:scale-95 transition-all duration-300"
            >
              <img className="w-20 h-20" src={elum.download_url} alt="" />
              <h1 className="text-white ">{elum.author}</h1>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
