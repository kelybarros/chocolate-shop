import ElementsBackground from "../assets/elements-background.png";

const FlavorCards = ({ setActiveFlavor }) => {
  return (
    <div
      id="catalog"
      className="relative z-10 bg-background px-4 md:px-0 flex justify-center overflow-hidden"
    >
      <img
        src={ElementsBackground}
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-20"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto h-auto md:h-screen gap-x-3 gap-y-20 md:gap-5 items-end pt-24 pb-14 md:pt-0 md:pb-30">
        
        <div
          className="relative group card brown-card bg-card-brown w-full h-32 md:h-[40vh]
          rounded-xl origin-top transform transition-transform duration-500 ease-out 
          hover:scale-y-[1.08] flex flex-col items-center justify-end overflow-hidden pb-3 md:pb-7 px-2.5 md:px-0"
          onMouseEnter={() => setActiveFlavor("brown")}
          onMouseLeave={() => setActiveFlavor(null)}
          onClick={() => setActiveFlavor("brown")}
        >
          <p className="font-body text-white text-[11px] sm:text-xs md:text-[16px] text-center leading-3.5 md:leading-4 tracking-[0.3px] md:tracking-[0.5px] 
          opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 
          transition-all duration-500 ease-out w-full md:w-70 md:px-0">
            Chocolate ao leite 50% cacau de origem única, aveludado e puro.
          </p>
        </div>

        <div
          className="relative group card green-card bg-card-green w-full h-32 md:h-[40vh]
          rounded-xl origin-top transform transition-transform duration-500 ease-out 
          hover:scale-y-[1.08] flex flex-col items-center justify-end overflow-hidden pb-3 md:pb-5 px-2.5 md:px-0"
          onMouseEnter={() => setActiveFlavor("green")}
          onMouseLeave={() => setActiveFlavor(null)}
          onClick={() => setActiveFlavor("green")}
        >
          <p className="font-body text-white text-[11px] sm:text-xs md:text-[16px] text-center leading-3.5 md:leading-4 tracking-[0.3px] md:tracking-[0.5px] 
          opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 
          transition-all duration-500 ease-out w-full md:w-70 md:px-0">
            Gianduia cremosa de pistache torrado e pedaços crocantes da castanha.
          </p>
        </div>

        <div
          className="relative group card red-card bg-card-red w-full h-32 md:h-[40vh]
          rounded-xl origin-top transform transition-transform duration-500 ease-out 
          hover:scale-y-[1.08] flex flex-col items-center justify-end overflow-hidden pb-3 md:pb-5 px-2.5 md:px-0 mt-0 md:mt-5"
          onMouseEnter={() => setActiveFlavor("red")}
          onMouseLeave={() => setActiveFlavor(null)}
          onClick={() => setActiveFlavor("red")}
        >
          <p className="font-body text-white text-[11px] sm:text-xs md:text-[16px] text-center leading-3.5 md:leading-4 tracking-[0.3px] md:tracking-[0.5px] 
          opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 
          transition-all duration-500 ease-out w-full md:w-70 md:px-0">
            Cacau com avelãs inteiras caramelizadas e framboesas liofilizadas.
          </p>
        </div>

        <div
          className="relative group card blue-card bg-card-blue w-full h-32 md:h-[40vh]
          rounded-xl origin-top transform transition-transform duration-500 ease-out 
          hover:scale-y-[1.08] flex flex-col items-center justify-end overflow-hidden pb-3 md:pb-5 px-2.5 md:px-0"
          onMouseEnter={() => setActiveFlavor("blue")}
          onMouseLeave={() => setActiveFlavor(null)}
          onClick={() => setActiveFlavor("blue")}
        >
          <p className="font-body text-white text-[11px] sm:text-xs md:text-[16px] text-center leading-3.5 md:leading-4 tracking-[0.3px] md:tracking-[0.5px] 
          opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 
          transition-all duration-500 ease-out w-full md:w-70 md:px-8">
            Chocolate ao leite caramelizado, com raspas finas de limão-siciliano.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FlavorCards;
