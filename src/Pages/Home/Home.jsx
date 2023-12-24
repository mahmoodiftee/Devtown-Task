import { Fragment, useEffect, useState } from "react";
import json from "../../assets/loading.json";
import GlobalCard from "../../Components/Card/GlobalCard";
import { useCustomHook } from "../../Provider/Provider";
import ListCard from "../../Components/Card/ListCard";
import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';
import { Dialog, Transition } from "@headlessui/react";

const Home = () => {
  const { loading, isGridView, setLoading, filters, setTotalData, selectedPriceRange, searchedItem, setCount } = useCustomHook();
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState([]);

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

  useEffect(() => {
    setTotalData(allCards.length);
  }, [allCards]);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(card) {
    setModal(card);
    setIsOpen(true)
  }

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
    <div>
      <div>
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
                    <GlobalCard openModal={openModal} key={card._id} card={card} />
                  ))}
                </div>
              ) : (
                <div className='flex flex-col py-2 md:pb-20 px-2 md:px-4 gap-2 md:gap-3'>
                  {filteredCards.map((card) => (
                    <ListCard openModal={openModal} key={card._id} card={card} />
                  ))}
                </div>
              )
            ) : (
              <div className="flex text-3xl pt-20 font-medium justify-center items-center"><p>No phones found.</p></div>
            )}
          </>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-base-100/70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl h-[500px] transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">

                  <div className="flex h-full gap-10">
                    <div className="flex-1 h-full w-full flex-shrink-0">
                      <img src={modal.image} className=" h-full w-full mx-auto object-contain" />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <div>
                        <h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                          {modal.phone_name}
                        </h3>
                        <p className="text-sm md:text-xl mb-2 font-light">
                          <span className="text-[16px] md:text-xl font-bold">Brand : </span><span className="md:text-lg font-semibold">{modal.brand}</span>
                        </p>
                        <p className="text-sm md:text-xl mb-2 font-light">
                          <span className="text-[16px] md:text-xl font-bold">Os : </span><span className="md:text-lg font-semibold">{modal.os}</span>
                        </p>
                        <p className="text-sm md:text-xl mb-2 font-light">
                          <span className="text-[16px] md:text-xl font-bold">RAM : </span><span className="md:text-lg font-semibold">{modal.ram}</span>
                        </p>
                        <p className="text-sm md:text-xl mb-2 font-light">
                          <span className="text-[16px] md:text-xl font-bold">Chipset : </span><span className="md:text-lg font-semibold">{modal.chipset}</span>
                        </p>
                        <p className="text-sm md:text-xl mb-2 font-light">
                          <span className="text-[16px] md:text-xl font-bold">Price : </span><span className="md:text-lg text-red-400 font-semibold">{modal.price}</span>
                        </p>
                      </div>


                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>

  );
};

export default Home;
