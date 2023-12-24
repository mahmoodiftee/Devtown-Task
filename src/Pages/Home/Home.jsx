import { useEffect, useState } from "react";
import json from "../../assets/jsons/Oppo.json";
import GlobalCard from "../../Components/Card/GlobalCard";
import { useCustomHook } from "../../Provider/Provider";
import ListCard from "../../Components/Card/ListCard";

const Home = () => {
  const { isGridView, filters, setTotalData, selectedPriceRange, searchedItem, setCount } = useCustomHook();
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  console.log(searchedItem);
  useEffect(() => {
    setAllCards(json);
  }, []);
  
  useEffect(() => {
    setTotalData(allCards.length);
  }, [allCards]);
  

  useEffect(() => {
    const filterData = () => {
      let filteredData = allCards;
      if (searchedItem && searchedItem !== "") {
        const searchTerm = searchedItem.toLowerCase();

        filteredData = filteredData.filter(
          (card) =>
            card.brand.toLowerCase().includes(searchTerm) ||
            card.os.toLowerCase().includes(searchTerm) ||
            card.ram.toLowerCase().includes(searchTerm) ||
            card.chipset.toLowerCase().includes(searchTerm)
        );
        setCount(filteredData.length);
      }

      if (filters.selectedBrand && filters.selectedBrand !== "") {
        filteredData = filteredData.filter((card) =>
          card.brand.toLowerCase() === filters.selectedBrand.toLowerCase()
        );
      }

      // Additional filters based on other criteria
      if (filters.selectedOS && filters.selectedOS !== "") {
        filteredData = filteredData.filter(
          (card) => card.os.toLowerCase() === filters.selectedOS.toLowerCase()
        );
      }

      if (filters.selectedRAM && filters.selectedRAM !== "") {
        filteredData = filteredData.filter(
          (card) => card.ram.toLowerCase() === filters.selectedRAM.toLowerCase()
        );
      }

      if (filters.selectedChipset && filters.selectedChipset !== "") {
        filteredData = filteredData.filter((card) =>
          card.chipset.toLowerCase() === filters.selectedChipset.toLowerCase()
        );
      }

      if (selectedPriceRange > 0) {
        filteredData = filteredData.filter(
          (card) => card.price <= selectedPriceRange
        );
      }
      setTotalData(allCards.length);
      setCount(filteredData.length);

      console.log("Filtered Data:", filteredData);
      return filteredData;
    };

    setFilteredCards(filterData());
  }, [allCards, filters, searchedItem]);

  return (
    <>
      {isGridView ? (
        <div className='grid grid-cols-1 md:grid-cols-3 py-2 md:pb-20 gap-2 md:gap-6'>
          {filteredCards.map((card) => (
            <GlobalCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col py-2 md:pb-20 px-2 md:px-4 gap-2 md:gap-3'>
          {filteredCards.map((card) => (
            <ListCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </>

  );
};

export default Home;
