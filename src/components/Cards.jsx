import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mt-[-3rem] mx-auto bg-white" src={single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-4 ">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium" >
            <p className="py-2 border-b mt-4">500 GB Storage</p>
            <p className="py-2 border-b ">i User Allowed</p>
            <p className="py-2 border-b ">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 text-black font-medium">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mt-[-3rem] mx-auto bg-white" src={double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-4 ">Partnership</h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium" >
            <p className="py-2 border-b mt-4">500 GB Storage</p>
            <p className="py-2 border-b ">i User Allowed</p>
            <p className="py-2 border-b ">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] mx-auto rounded-md py-2 my-4 text-[#00df9a] font-medium">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mt-[-3rem] mx-auto bg-white" src={triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-4 ">Group Account</h2>
          <p className="text-center font-bold text-4xl">$229</p>
          <div className="text-center font-medium" >
            <p className="py-2 border-b mt-4">500 GB Storage</p>
            <p className="py-2 border-b ">i User Allowed</p>
            <p className="py-2 border-b ">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 text-black font-medium">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
