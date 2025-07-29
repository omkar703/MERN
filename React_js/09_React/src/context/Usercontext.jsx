import React, { createContext } from "react";

export const UserContext = createContext();

const Usercontext = ({ children }) => {
  const username = "Omkar";

  return (
    <UserContext.Provider value={username}>{children}</UserContext.Provider>
  );
};

export default Usercontext;
