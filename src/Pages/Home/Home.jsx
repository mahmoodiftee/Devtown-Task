import { useEffect, useState } from "react";
import json from "../../assets/loading.json";
import GlobalCard from "../../Components/Card/GlobalCard";
import { useCustomHook } from "../../Provider/Provider";
import ListCard from "../../Components/Card/ListCard";
import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  const { loading, isGridView, setLoading, filters, setTotalData, selectedPriceRange, searchedItem, setCount } = useCustomHook();
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    axios.get('https://server-shop-mobile.vercel.app/phones')
      .then((response) => {
        const data = response.data;
        setAllCards(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [filters, searchedItem]);

  // useEffect(() => {
  //   console.log('Filtering by Price. Selected Price Range:', selectedPriceRange);

  //   const filteredByPrice = allCards.filter(
  //     (card) => {
  //       const cardPrice = parseFloat(card.price.replace(/[^0-9.-]+/g, ''));
  //       return cardPrice <= selectedPriceRange;
  //     }
  //   );

  //   console.log('Filtered Cards by Price:', filteredByPrice);

  //   setFilteredCards(filteredByPrice);
  // }, [allCards, selectedPriceRange]);

  useEffect(() => {
    setTotalData(allCards.length);
  }, [allCards]);


  useEffect(() => {
    const filterData = () => {
      let filteredData = allCards;

 if (filters.selectedPrice && filters.selectedPrice !== "") {

      filteredData = filteredData.filter((card) => {
        const cardPrice = parseFloat(card.price.replace(/[^0-9.-]+/g, ''));
        return cardPrice <= selectedPriceRange;
      });
    }

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

      setTotalData(allCards.length);
      setCount(filteredData.length);

      return filteredData;
    };

    setFilteredCards(filterData());
  }, [allCards, filters, searchedItem]);


  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <Player
            autoplay
            loop
            src={json}
            className='h-[400px] w-[350px] lg:h-[600px] lg:w-[600px]'
          >
          </Player>
        </div>
      ) : (
        <>
          {filteredCards.length > 0 ? (
            isGridView ? (
              <div className='grid grid-cols-1 md:grid-cols-3 py-2 md:pb-20 gap-2 md:gap-6'>
                {filteredCards.map((card) => (
                  <GlobalCard key={card._id} card={card} />
                ))}
              </div>
            ) : (
              <div className='flex flex-col py-2 md:pb-20 px-2 md:px-4 gap-2 md:gap-3'>
                {filteredCards.map((card) => (
                  <ListCard key={card._id} card={card} />
                ))}
              </div>
            )
          ) : (
            <div className="flex text-3xl pt-20 font-medium justify-center items-center"><p>No phones found.</p></div>
          )}
        </>
      )}
    </>

  );
};

export default Home;
