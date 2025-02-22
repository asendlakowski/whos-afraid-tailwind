import React from "react";

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
        <img src={props.image} className="m-2 w-full mx-auto drop-shadow-xl" alt="painting" />
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
