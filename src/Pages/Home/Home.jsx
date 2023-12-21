import { useEffect, useState } from "react";
import json from "../../assets/jsons/Oppo.json";
import GlobalCard from "../../Components/Card/GlobalCard";
import { useCustomHook } from "../../Provider/Provider";

const Home = () => {
    const { Selected, searchedItem } = useCustomHook();
    const [allCards, setAllCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        setAllCards(json);
    }, []);

    useEffect(() => {
        const filterData = () => {
            let filteredData = allCards;

            // Filter by selected brand
            if (Selected && Selected !== "") {
                filteredData = filteredData.filter(
                    (card) => card.brand.toLowerCase() === Selected.toLowerCase()
                );
            }

            // Additional filters based on other criteria
            if (searchedItem && searchedItem !== "") {
                filteredData = filteredData.filter(
                    (card) => card.brand.toLowerCase() === searchedItem.toLowerCase()
                );
            }
            filteredData = filteredData.filter((card) => card.os.toLowerCase() === 'ios');
            filteredData = filteredData.filter((card) => card.ram === '4GB');
            filteredData = filteredData.filter((card) => card.chipset === 'Apple A15 Bionic');
            // filteredData = filteredData.filter((card) => parseInt(card.price.replace('$', '')) <= 1000);

            return filteredData;
        };

        setFilteredCards(filterData());
    }, [allCards, Selected, searchedItem]);

    return (
        <div className='px-4 grid grid-cols-1 md:grid-cols-3 py-2 md:pb-20 gap-2 md:gap-6'>
            {filteredCards.map((card) => (
                <GlobalCard key={card.id} card={card} />
            ))}
        </div>
    );
};

export default Home;
