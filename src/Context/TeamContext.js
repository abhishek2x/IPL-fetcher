import React, { useState, createContext } from "react";

// Create Context Object
export const TeamContext = createContext();

// Create a provider for components to consume and subscribe to changes
// For year_checked state

export const TeamContextProvider = props => {
  const [data, setData] = useState([]);
  return (
    <TeamContext.Provider value={[data, setData]}>
      {props.children}
    </TeamContext.Provider>
  );
};
