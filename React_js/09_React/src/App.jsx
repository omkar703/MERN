import React, { useContext } from "react";
import { UserContext } from "./context/Usercontext.jsx";

function App() {
  const data = useContext(UserContext);
  console.log(data); // Should log "Omkar"

  return <div>App - Hello {data}</div>;
}

export default App;
