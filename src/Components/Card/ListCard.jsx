
const ListCard = ({ card }) => {
    return (
        <div>
            <div className="flex justify-between py-3 px-4 rounded-xl items-center gap-3 md:gap-6 w-full bg-base-100 shadow-md">
                <div className="flex  flex-1 justify-start items-center gap-3 md:gap-6 w-full">
                    <figure><img className="h-24 object-contain rounded-lg" src={card.image} alt="Movie" /></figure>
                    <div className="">
                        <h2 className="text-lg font-semibold">{card?.phone_name}</h2>
                        <p className="text-sm font-semibold">Brand : {card?.brand} | Price : <span className="text-red-600">{card?.price}</span></p>
                    </div>
                </div>
                <footer className="flex-1 full flex justify-end">
                    <button className="btn btn-sm py-0 px-3 btn-neutral" >
                        Details
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default ListCard;
{/* <figure><img className="h-[50%] object-contain" src={card.image} alt="Movie" /></figure>
                <div className="">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div> */}