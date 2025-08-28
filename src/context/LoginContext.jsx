import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(true);
  return (
    <LoginContext.Provider value={{loginStatus}}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
