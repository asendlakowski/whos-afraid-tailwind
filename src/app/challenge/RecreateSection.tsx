"use client"
import React, { ReactNode, useState } from "react";
import { level_name } from "../leveltemplates/level_type";
import { level1 } from "../leveltemplates/all_levels";
import Image from "next/image";

interface RecreateSectionProps {
  paintingWidth: number;
  paintingHeight: number;
  painting: ReactNode;
  title: string;
  artist: string;
}


const RecreateSection = (props: RecreateSectionProps) => {
  const { paintingWidth, paintingHeight, title, artist, painting } = props;
  const [showHint, setShowHint] = useState(false);
  return (
    <div className="flex flex-col justify-between items-center my-2">
      {/* Header Bar */}
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src="hamburger.svg"
            alt="menu selector"
            width={23}
            height={16}
            className="opacity-75"
          />
          <p className="text-white font-rb font-semibold text-lg opacity-75">
            LEVELS
          </p>
        </div>
        <Image
          src="xicon.svg"
          alt="x icon"
          width={30}
          height={30}
          className="opacity-75"
        />
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
        <div className="grid grid-cols-3 w-[320px] justify-items-center">
          <div className="w-12 h-6 bg-white" />
          <div className="w-12 h-6 bg-white" />
          <div className="w-12 h-6 bg-white" />
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
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-[#CBCDFE] text-[#3239FB] border-2 border-white-0 rounded-md shadow-lg">
              <div className="font-bold">
                Hint for You
              </div>
              {level1.hint}
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
