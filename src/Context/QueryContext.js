import React, { useState, createContext } from "react";

// Create Context Object
export const QueryContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const QueryContextProvider = props => {
  const [tab, setTab] = useState('');
  return (
    <QueryContext.Provider value={[tab, setTab]}>
      {props.children}
    </QueryContext.Provider>
  );
};
