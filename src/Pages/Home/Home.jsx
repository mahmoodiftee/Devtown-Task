import { useEffect, useState } from "react";
import json from "../../assets/jsons/iphone.json"
import GlobalCard from "../../Components/Card/GlobalCard";

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(json);
    }, [])
    return (
        <div className='px-4 grid grid-cols-1 md:grid-cols-3 py-2 md:pb-20 gap-2 md:gap-6'>
            {
                cards.map(card => (
                    <GlobalCard key={card.id} card={card}/>
                ))
            }
        </div>
    );
};

export default Home;