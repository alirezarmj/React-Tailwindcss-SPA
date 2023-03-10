import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl py-4">
            Fast,flexible,financing for
          </p>
          <Typed
            className="text-xl sm:text-4xl md:text-5xl md:pl-4 pl-2"
            strings={["BTB", "BTS", "SASS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTS & SASS platforms.</p>
      <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 text-black font-medium">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
