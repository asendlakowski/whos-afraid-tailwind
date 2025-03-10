import React from "react";
import Image from "next/image";
import { levels } from "../leveltemplates/all_levels";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-white via-white via-75% to-primary-purple w-screen h-screen">
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
              <a
                href="../home"
                className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]"
                aria-current="page"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 bg-[#3F46FB33] rounded-md text-[#3239FB]"
              >
                My Collection
              </a>
            </li>
            <li>
              <a
                href="../community"
                className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="../aboutus"
                className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full ">
        <div className="font-blinker text-[#3239FB] flex justify-center text-5xl">
          My Collection
        </div>
        <div className="flex">
          {levels.map((level, index) => {
            const style = `w-[${level.w}px] h-[${level.h}px] mx-auto my-8 p-2 border-8 border-gray-800 rounded-lg shadow-2xl`;
            return (
              <div key={index} className={style}>
                <Image
                  className="relative"
                  src={level.svg_name}
                  alt="logo"
                  height={300}
                  width={level.w}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
