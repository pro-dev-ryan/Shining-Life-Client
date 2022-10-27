import React from "react";
import { createContext } from "react";

export const DataContext = createContext({});

const ContextData = ({ children }) => {
  const contextContent = {};

  return (
    <DataContext.Provider value={contextContent}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextData;
