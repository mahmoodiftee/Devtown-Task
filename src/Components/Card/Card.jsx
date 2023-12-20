
const Card = () => {
    return (
        <div className="featured__cards w-52">
            <span className="featured__tag">Sale</span>
            <img src="https://i.ibb.co/zQXyZFr/1.png" alt="" className="featured__img mx-auto border-2" />
            <div className="featured__data">
                <h3 className="featured__title">Jazzmaster</h3>
                <span className="featured__price">$1050</span>
            </div>
            <button className="buttons featured__button">ORDER</button>
        </div>
    );
};

export default Card;