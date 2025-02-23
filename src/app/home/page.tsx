import React from "react";
import Level from "./level";
import Image from "next/image";
import { levels } from "../leveltemplates/all_levels";


const Home = () => {
  return (
    <div className="bg-gradient-to-t from-white via-white via-75% to-primary-purple w-screen h-screen flex flex-col justify-between">
      {/* Navigation Bar */}
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center p-[30px] pl-[80px]">
          <a href="/home">
            <Image src="/logo.svg" alt="logo" height={50} width={50} priority />
          </a>
          <ul className="ml-20 flex flex-row space-x-8 font-blinker">
            <li>
              <a href="#" className="block py-2 px-3 bg-[#3F46FB33] rounded-md text-[#3239FB]" aria-current="page">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">
                My Collection
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">
                Community
              </a>
            </li>
            <li>
              <a href="../aboutus" className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Center Content */}
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center">
        <p className="font-blinker text-[#3239FB]">UPCOMING CHALLENGES IN ...</p>
        <h1 className="font-blinker text-[#3239FB] text-5xl">Your Art Gallery</h1>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-row overflow-x-scroll space-x-10 p-[80px] no-scrollbar">
        {levels.map((level, index) => (
          <Level key={index} level={index + 1} artist={level.artist} name={level.title} image={level.svg_name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
