import React from "react";
import Image from "next/image";

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
                href="../mycollection"
                className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]"
              >
                My Collection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded-md hover:bg-[#3F46FB33] border-0 hover:text-[#3239FB]"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 bg-[#3F46FB33] rounded-md text-[#3239FB]"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-full ">
        <div className="font-blinker text-[#3239FB] flex justify-center text-5xl mb-8">
          About Us
        </div>
        <div className="font-blinker text-[#3239FB] flex justify-center text-3xl text-center">
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col justify-center items-center">
              <p>Owen</p>
              <p className="text-sm">Developer</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>Alana</p>
              <p className="text-sm">Developer</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>Kiara</p>
              <p className="text-sm">Developer</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>Bill</p>
              <p className="text-sm">Developer</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>Shannon</p>
              <p className="text-sm">Designer</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>Jet</p>
              <p className="text-sm">Developer</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
