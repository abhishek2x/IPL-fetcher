import React, { useState, createContext } from "react";

// Create Context Object
export const YearContext = createContext();

// Create a provider for components to consume and subscribe to changes
// For year_checked state

export const YearContextProvider = props => {
  const [data, setDate] = useState([]);
  return (
    <YearContext.Provider value={[data, setDate]}>
      {props.children}
    </YearContext.Provider>
  );
};
