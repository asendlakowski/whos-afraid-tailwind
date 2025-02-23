"use client";
import React, { ReactNode, useState } from "react";
import { levels } from "../leveltemplates/all_levels";
import Image from "next/image";
import Link from "next/link";


interface RecreateSectionProps {
  paintingWidth: number;
  paintingHeight: number;
  painting: ReactNode;
  title: string;
  artist: string;
  colors: string[];
  toggleLeftWindow: () => void;
}

const RecreateSection = (props: RecreateSectionProps) => {
  const {
    paintingWidth,
    paintingHeight,
    title,
    artist,
    painting,
    colors,
    toggleLeftWindow,
  } = props;
  const [showHint, setShowHint] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [hexCopiedIndex, hexSetCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (textToCopy: string, index: number) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      hexSetCopiedIndex(index);
      // display copied! for 2 sec
      setTimeout(() => hexSetCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div className="flex flex-col justify-between items-center my-2">
      {/* Header Bar */}
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <div className="relative inline-block text-left">
            {/* Hamburger Icon Button */}
            <button
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-secondary-blue text-sm font-medium text-[#D7E1E8] hover:bg-[#D7E1E8] hover:text-secondary-blue focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuIsOpen ? (
                  // X icon when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Dropdown Menu */}
            {menuIsOpen && (
              <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-[#D7E1E8] text-secondary-blue z-10">
                <div className="py-1">
                  <Link
                    href={{
                      pathname: "/challenge",
                      query: { level: String(0) },
                    }}
                    className="block px-4 py-3 text-med text-gray-700 hover:px-4 font-blinker hover:font-bold"
                    onClick={() => setMenuIsOpen(false)}
                  >
                    Level 1
                  </Link>
                  <Link
                    href={{
                      pathname: "/challenge",
                      query: { level: String(1) },
                    }}
                    className="block px-4 py-3 text-med text-gray-700 font-blinker hover:font-bold"
                    onClick={() => setMenuIsOpen(false)}
                  >
                    Level 2
                  </Link>
                  <Link
                    href={{
                      pathname: "/challenge",
                      query: { level: String(2) },
                    }}
                    className="block px-4 py-3 text-med text-gray-700 font-blinker hover:font-bold"
                    onClick={() => setMenuIsOpen(false)}
                  >
                    Level 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <p className="text-white font-rb font-semibold text-lg opacity-75">
            LEVELS
          </p>
        </div>
        <button onClick={toggleLeftWindow}>
          <Image
            src="xicon.svg"
            alt="x icon"
            width={30}
            height={30}
            className="opacity-75"
          />
        </button>
      </div>

      {/* Rest of the section */}
      <div className="flex flex-col gap-4 items-center">
        <p className="text-white font-rb font-bold text-2xl opacity-75">
          RECREATE THIS PIECE
        </p>
        <div className="bg-[#FFFFFF40] border-4 border-[#FFFFFF80] rounded-xl">
          <div
            className={
              "w-[" +
              paintingWidth +
              "px] h-[" +
              paintingHeight +
              "px] bg-black m-2"
            }
          >
            {painting}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-rb font-bold text-lg opacity-75 text-center max-w-[320px]">
            {'"' + title + '"'}
          </p>
          <p className="text-white font-rb font-bold text-md opacity-75 text-center">
            {artist}
          </p>
        </div>

        {/* Hex code section */}
        <div className="grid grid-cols-3 w-[320px] justify-items-center gap-2">
          {colors.map((c, i) => {
            return (
              <button key={i} onClick={() => handleCopy(c, i)}>
              <div
                key={i}
                className="w-full bg-[#ffffff60] rounded-md p-1 flex flex-row gap-1 justify-center items-center"
              >
                <span
                  className="w-[18px] h-[18px] rounded-sm"
                  style={{ backgroundColor: c }} // Use inline style to apply dynamic color
                />
                <span>
                  {hexCopiedIndex === i ? <p className="font-blinker text-[#333333] font-rb font-semibold">Copied!</p> : <p className="font-blinker text-[#333333] font-rb font-semibold">{c}</p>}
                </span>
                {/* <div className="w-[18px] h-[18px] bg-[${c}] rounded-sm" style={{ backgroundColor: c }} /> */}
                {/* <p className="text-[#333333] font-rb font-semibold">{c}</p> */}
              </div>
              {/* {hexIsCopied ? "Copied!" : "Copy Text"} */}
              </button>
            );
          })}
        </div>

        <p className="text-white font-rb font-bold text-sm opacity-75 text-left max-w-[320px]">
          This is a great hint that will give you some guidance on how to solve
          this problem using cool tailwind methods yippeeeeeeeeeee
        </p>
      </div>

      {/* Bottom Buttoms */}
      <div className="flex flex-row gap-5">
        <Image src="map.svg" alt="fun fact" width={38} height={38} />
        <div className="relative">
          {showHint && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-primary-purple text-[#3239FB] border-2 border-white-0 rounded-md shadow-lg">
              <div className="font-bold">Hint for You</div>
              {levels[0].hint}
            </div>
          )}
          <button onClick={() => setShowHint(!showHint)}>
            <Image src="/questionbox.svg" alt="hint" width={38} height={38} />
          </button>
        </div>
        <Image src="painticon.svg" alt="color swap" width={38} height={38} />
      </div>
    </div>
  );
};

export default RecreateSection;
