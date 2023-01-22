import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto py-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            optio ut facilis nihil. Modi doloremque deserunt sequi pariatur amet
            facere fugiat ullam minima eaque adipisci tenetur sed, corporis
            assumenda voluptatem!
          </p>
          <button className="bg-black w-[200px] mx-auto md:mx-0 rounded-md py-2 my-4 text-[#00df9a] font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
