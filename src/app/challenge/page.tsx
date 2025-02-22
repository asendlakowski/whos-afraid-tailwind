import React from "react";
import RecreateSection from "./RecreateSection";

const Challenge = () => {
  return (
    <div className="w-screen h-screen bg-[#5D8AA1]">
      <div className="grid grid-cols-[2fr_3fr_3fr] w-screen h-screen gap-5 pt-10 px-5 pb-5">
        <RecreateSection
          paintingWidth={300}
          paintingHeight={420}
          title="Who's Afraid of Red, Yellow, and Blue I"
          artist="Barnett Newman"
          painting={
            <div className="w-[300px] h-[420] bg-[#cd0000] flex flex-row justify-between">
              <div className="w-3 h-full bg-[#02007f]"></div>
              <div className="w-1 h-full bg-[#fec800]"></div>
            </div>
          }
        />
        <div className="bg-white w-full h-full opacity-75 rounded-xl" />
        <div className="bg-white w-full h-full opacity-75 rounded-xl" />
      </div>
    </div>
  );
};

export default Challenge;
