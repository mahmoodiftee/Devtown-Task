
const GlobalCard = ({ card }) => {
    return (
        <div>
            <div className="w-full rounded-xl border-base-200 bg-base-100 border px-4 py-2">
                <div className="h-72 p-2 bg-base-100 rounded-lg">
                    <img
                        src={card.image}
                        alt="card-image"
                        className=" h-full w-full object-contain"
                    />
                </div>
                <div className="px-4">
                    <span className="text-2xl font-bold">
                        {card.brand}
                    </span>
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-lg font-bold">
                            {card.phone_name}
                        </span>
                        <span className="text-lg font bold">
                            {card.price}
                        </span>
                    </div>
                </div>
                <footer className="pt-0 my-2 w-full flex justify-center">
                    <button className="btn btn-sm mx-auto py-0 px-3 btn-neutral" >
                        Details
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default GlobalCard;