import { useEffect, useState } from "react";
import json from "../../assets/jsons/posts.json"
import Card from '../../Components/Card/Card';

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(json);
    }, [])
    return (
        <div className='px-4 grid grid-cols-1 md:grid-cols-3 pb-6 md:pb-20 gap-2 md:gap-6'>
            {
                cards.map(card => (
                    <Card key={card.id} card={card}/>
                ))
            }
        </div>
    );
};

export default Home;