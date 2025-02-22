import React, { ReactNode } from "react";
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
  return (
    <div className="flex flex-col gap-20">
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
              "px] bg-black m-4"
            }
          >
            {painting}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-rb font-bold text-lg opacity-75 text-center max-w-[300px]">
            {'"' + title + '"'}
          </p>
          <p className="text-white font-rb font-bold text-md opacity-75 text-center">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecreateSection;
