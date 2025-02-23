import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LevelProps {
  name: string;
  artist: string;
  level: number;
  image: string;
}

const Level = (props: LevelProps) => {
  const { name, artist, level, image } = props;
  return (
    <Link
      href={{ pathname: "/challenge", query: { level: String(level - 1) } }}
      className="bg-[#F6F6F6] rounded-2xl min-w-[400px] flex-none border-4 border-[#D4D4D4] p-8"
    >
      <div className="font-blinker text-[#3239FB] flex justify-center text-3xl font-bold">
        Level {level}
      </div>
      <Image
        className="m-2 w-full max-h-[300px] mx-auto drop-shadow-xl"
        src={image}
        alt="level"
        height={50}
        width={50}
        priority
      />
      <div className="font-blinker text-black flex justify-center text-sm">
        {name}
      </div>
      <div className="font-blinker text-black flex justify-center text-sm">
        {artist}
      </div>
    </Link>
  );
};

export default Level;
