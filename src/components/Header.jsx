import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "./resuable/Image";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <div className="">
        <Image src="logo.png" alt="blogify" w={128} h={128}/>
      </div>
      {/* mobile-header */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out
            ${open ? "right-0" : "right-[-100%]"}`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
              Login 👋
            </button>
          </a>
        </div>
      </div>
      {/* desktop-header */}
      <div className="hidden md:flex items-center gap-8 font-meduim xl:gap-12">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;  
