import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>This is main Content</main>

      <div className="cards">
        <Card
          title="Title of the card"
          content="This is the content of the card"
        ></Card>
        <Card></Card>
        <Card></Card>

        <Card></Card>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
