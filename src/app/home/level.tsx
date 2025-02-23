import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LevelProps {
  name: string;
  artist: string;
  level: number;
  image: string;
}

const Level = ({ name, artist, level, image }: LevelProps) => {
  return (
    <Link
      href={{ pathname: "/challenge", query: { level: String(level - 1) } }}
      className="bg-[#F6F6F6] rounded-2xl flex flex-col items-center border-4 border-[#D4D4D4] p-6
                 flex-grow min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] max-w-[400px] transition-transform hover:scale-105"
    >
      <div className="font-blinker text-[#3239FB] text-center text-2xl font-bold">
        Level {level}
      </div>
      <div className="w-full max-h-[250px] flex justify-center">
        <Image
          className="m-2 w-auto max-h-[250px] object-contain drop-shadow-xl"
          src={image}
          alt={`Level ${level}`}
          height={250}
          width={250}
          priority
        />
      </div>
      <div className="text-center font-blinker text-black text-sm mt-2">{name}</div>
      <div className="text-center font-blinker text-black text-sm opacity-80">{artist}</div>
    </Link>
  );
};

export default Level;
