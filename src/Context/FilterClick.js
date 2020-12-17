import React, { useState, createContext } from "react";

// Create Context Object
export const FilterClickContext = createContext(0);

// Create a provider for components to consume and subscribe to changes

export const FilterClickContextProvider = props => {
  const [click, setClick] = useState(0);
  return (
    <FilterClickContext.Provider value={[click, setClick]}>
      {props.children}
    </FilterClickContext.Provider>
  );
};
