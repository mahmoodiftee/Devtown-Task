import { useEffect, useState } from "react";
import json from "../../assets/jsons/Oppo.json";
import GlobalCard from "../../Components/Card/GlobalCard";
import { useCustomHook } from "../../Provider/Provider";

const Home = () => {
  const { filters, setTotalData, searchedItem, setCount } = useCustomHook();
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  console.log(searchedItem);
  useEffect(() => {
    setAllCards(json);
  }, []);
  useEffect(() => {
    setTotalData(allCards);
  }, []);

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

      if (filters.selectedPrice && filters.selectedPrice !== "") {
        const priceRange = parseInt(filters.selectedPrice, 10);

        filteredData = filteredData.filter(
          (card) => card.price <= priceRange
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
    <div className='px-4 grid grid-cols-1 md:grid-cols-3 py-2 md:pb-20 gap-2 md:gap-6'>
      {filteredCards.map((card) => (
        <GlobalCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Home;
