"use client";
import React, { ReactNode, useState } from "react";
import { levels } from "../leveltemplates/all_levels";
import Image from "next/image";
// import Link from "next/link";
import Hamburger from "./Hamburger";
import Link from "next/link";

interface RecreateSectionProps {
  paintingWidth: number;
  paintingHeight: number;
  painting: ReactNode;
  title: string;
  artist: string;
  colors: string[];
  setCurrBackground: (color: string) => void;
  svg_name: string;
  toggleLeftWindow: () => void;
  infoURL: string;
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
    infoURL,
    setCurrBackground,
  } = props;
  const [showHint, setShowHint] = useState(false);
  const [originalImage, setOriginalImage] = useState(false);
  const [showBackgroundColors, setShowBackgroundColors] = useState(false);
  const colorArray = [
    "#CDD77C",
    "#315724",
    "#010101",
    "#5D8AA1",
    "#3239FB",
    "#9E779D",
    "#FF5260",
    "#FE868D",
    "#FF999A",
    "#BEBEBE",
  ];
  const [hexCopiedIndex, hexSetCopiedIndex] = useState<number | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#5D8AA1");

  const handleCopy = async (textToCopy: string, index: number) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      hexSetCopiedIndex(index);
      // display copied! for 2 sec
      setTimeout(() => hexSetCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center my-2 overflow-y-scroll scrollbar-hide no-scrollbar">
      {/* Header Bar */}
      <div
        className="w-full flex flex-row justify-between items-center sticky top-0 z-50"
        style={{ backgroundColor }}
      >
        <div className="flex flex-row gap-3 items-center">
          <div className="relative inline-block text-left">
            <Hamburger />
          </div>
          <p className="text-white font-rb font-semibold text-lg">LEVELS</p>
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

        <div className="bg-[#FFFFFF40] border-4 border-[#FFFFFF80] rounded-xl relative">
          <button
            className="absolute top-2 right-2 bg-white/25 px-3 py-1 text-sm rounded-md shadow-md z-10 m-2"
            onClick={() => setOriginalImage(!originalImage)}
          >
            {originalImage ? "See solution" : "See original image"}
            <Image
              className="inline ml-2"
              src="eye.svg"
              alt="original"
              height={20}
              width={20}
              priority
            />
          </button>

          <div
            className={`relative w-[${paintingWidth}px] h-[${paintingHeight}px] bg-black m-2`}
          >
            {painting}

            {originalImage && (
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={props.svg_name}
                alt="original"
                height={50}
                width={50}
                priority
              />
            )}
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
                    {hexCopiedIndex === i ? (
                      <p className="font-blinker text-[#333333] font-rb font-semibold">
                        Copied!
                      </p>
                    ) : (
                      <p className="font-blinker text-[#333333] font-rb font-semibold">
                        {c}
                      </p>
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-white font-rb font-bold text-sm opacity-75 text-left max-w-[320px] my-4">
          This is a great hint that will give you some guidance on how to solve
          this problem using cool tailwind methods yippeeeeeeeeeee
        </p>
      </div>

      {/* Bottom Buttoms */}
      <div className="flex flex-row gap-5">
        <a
          href={infoURL}
          target="_blank"
          className="flex justify-center items-center bg-[#ffffff60] w-[38px] h-[38px] rounded-lg border-[1.5px] border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-info-circle-fill "
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
          </svg>
        </a>
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
        <div className="relative">
          {showBackgroundColors && (
            <div className="absolute bottom-full left-[-20%] -translate-x-1/2 mb-2  px-3 pr-0 py-2 bg-[#CBCDFE] text-[#3239FB] border-2 border-white-0 rounded-md shadow-lg">
              <div className="flex space-x-1">
                {colorArray.map((color, index) => (
                  <button
                    key={index}
                    className="flex items-center rounded-full"
                    style={{ backgroundColor: color }} // Set the button color dynamically
                    onClick={() => {
                      setCurrBackground(color);
                      setBackgroundColor(color);
                    }} // Change the background color when clicked
                  >
                    <span className="w-[18px] h-[18px] rounded-full hover:border-2" />
                  </button>
                ))}
                <span className="w-[18px] h-[18px] rounded-sm" />
              </div>
            </div>
          )}
          <button
            onClick={() => setShowBackgroundColors(!showBackgroundColors)}
          >
            <Image src="/painticon.svg" alt="hint" width={38} height={38} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecreateSection;
