import { createContext, useContext, useState } from 'react';
export const FilterContext = createContext();

const Provider = ({ children }) => {
  const [Selected, setSelected] = useState(null);
  const [searchedItem, setSearchedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <FilterContext.Provider value={{ loading, Selected, setSelected, searchedItem, setSearchedItem }}>
      {children}
    </FilterContext.Provider>
  );
};
export default Provider;

export const useCustomHook = () => {
  return useContext(FilterContext);
};
