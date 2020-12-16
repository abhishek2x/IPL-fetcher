import React, { useState, createContext } from "react";

// Create Context Object
export const TabContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const TabContextProvider = props => {
  const [tab, setTab] = useState(0);
  return (
    <TabContext.Provider value={[tab, setTab]}>
      {props.children}
    </TabContext.Provider>
  );
};
