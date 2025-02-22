import React from "react";
import Level from "./level";
import Image from "next/image";


const Home = () => {
  return (
// bg-[#F5F4E2]
<div className="bg-gradient-to-t from-white via-white via-75% to-[#CBCDFE] w-screen h-screen">
    <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center p-[30px] pl-[80px] ">
          <a href="/home" className="">
              <Image
                className=""
                src="/logo.svg"
                alt="logo"
                height={50}
                width={50}
                priority
              />
          </a>
            <ul className="ml-20 flex flex-row space-x-8 font-blinker">
              <li>
                <a href="#" className="block py-2 px-3 bg-[#3F46FB33] rounded-md text-[#3239FB]" aria-current="page">Gallery</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">My Collection</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">Community</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">About Us</a>
              </li>
            </ul>
        </div>
      </nav>
      <div className="w-full ">
        <div className="font-blinker text-[#3239FB] flex justify-center">
          UPCOMING CHALLENGES IN ...
        </div>
        <div className="font-blinker text-[#3239FB] flex justify-center text-5xl" >
          Your Art Gallery
        </div>
      </div>
      <div className="w-full flex flex-row overflow-x-scroll space-x-10 p-[80px]">
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
        <Level level={1} artist="Owen Prendergast" name="Who's Afraid of Red, Yellow, and Blue?" image="logo.svg"></Level>
      </div>
      
    </div>

  );
};

export default Home;
