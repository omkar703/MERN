import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const users = [
    {
      name: "omkar",
      age: 25,
      city: "delhi",
    },
    {
      name: "rahul",
      age: 25,
      city: "delhi",
    },
    {
      name: "ashu",
      age: 25,
      city: "delhi",
    },
  ];

  return (
    // <>
    //   <h1>Hello</h1>
    //   <h2>omkar</h2>
    // </>

    // <>
    //   <Header />
    //   <Navbar />
    //   <Footer />
    // </>

    <>
      <Card users={users} />
    </>
  );
}

export default App;
