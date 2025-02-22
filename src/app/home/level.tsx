import React from "react";
import Image from "next/image";

interface LevelProps {
    name: string;
    artist: string;
    level: number;
    image: string;
}

const Level = (props: LevelProps) => {
    return (
      <div className="bg-[#F6F6F6] rounded-2xl min-w-[400px] flex-none border-4 border-[#D4D4D4] p-8">
        <div className="font-blinker text-[#3239FB] flex justify-center text-3xl font-bold">
          Level {props.level}
        </div>
        <Image
            className="m-2 w-full mx-auto drop-shadow-xl"
            src={props.image}
            alt="level"
            height={50} 
            width={50}
            priority
        />
        <div className="font-blinker text-black flex justify-center text-sm">
          {props.name}
        </div>
        <div className="font-blinker text-black flex justify-center text-sm">
          {props.artist}
        </div>
      </div>
    );
  };
  
export default Level;
