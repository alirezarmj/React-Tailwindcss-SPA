import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center justify-between h-24 px-4 mx-auto max-w-[1240px] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : " fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-800">Home</li>
          <li className="p-4 border-b border-gray-800">Company</li>
          <li className="p-4 border-b border-gray-800">Resources</li>
          <li className="p-4 border-b border-gray-800">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
