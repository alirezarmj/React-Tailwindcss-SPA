import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input className="flex p-2 rounded-md w-full" type="email" placeholder="Enter your email" />
            <button className="bg-[#00df9a] w-[200px]  rounded-md py-2 my-4 text-black font-medium ml-4">Notify me</button>
          </div>
          <p>we care bout the protection of your data, read our <span className="text-[#00df9a] underline underline-offset-4">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
