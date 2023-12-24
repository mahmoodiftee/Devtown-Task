import { createContext, useContext, useState } from 'react';

export const FilterContext = createContext();

const Provider = ({ children }) => {
  const [filters, setFilters] = useState({
    selectedBrand: null,
    selectedOS: null,
    selectedRAM: null,
    selectedChipset: null,
    selectedPrice: null,
  });
  const [loading, setLoading] = useState(false);
  const [searchedItem, setSearchedItem] = useState('');
  const [count, setCount] = useState('');
  const [totalData, setTotalData] = useState('');
  console.log(totalData, count);

  console.log(searchedItem);
  return (
    <FilterContext.Provider value={{ totalData, setTotalData, count, setCount, loading, filters, searchedItem, setFilters, setSearchedItem }}>
      {children}
    </FilterContext.Provider>
  );
};

export default Provider;

export const useCustomHook = () => {
  return useContext(FilterContext);
};
