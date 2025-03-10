import React, { ReactNode } from "react";
import Image from "next/image";
import PercentBar from "./PercentBar";

interface YourCodeSectionProps {
  frame: ReactNode;
  funfact: string;
  onSubmitClicked: () => void;
  percentAccurate: number;
  showSolution: () => void;
}

const YourCodeSection = (props: YourCodeSectionProps) => {
  const { frame, funfact, onSubmitClicked, percentAccurate, showSolution } =
    props;
  return (
    <div className="bg-[#FFFFFFC0] w-full h-full rounded-xl flex flex-col justify-between items-center gap-4 p-6 overflow-y-scroll no-scrollbar">
      <p className="text-primary-blue font-rb font-bold text-2xl text-center">
        YOUR CODE OUTPUT
      </p>
      <div className="rounded-xl border-4 border-solid border-primary-purple">
        {frame}
      </div>
      <PercentBar percent={percentAccurate} />
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => onSubmitClicked()}
          className="flex flex-row justify-center items-center gap-2 bg-primary-blue py-2 px-4 rounded-full border drop-shadow-xl"
        >
          <Image src="sendicon.svg" alt="send icon" width={12} height={12} />
          <p className="text-white font-rb font-semibold text-base">
            SUBMIT MY ANSWER
          </p>
        </button>
        {percentAccurate < 80 && percentAccurate > 0 ? (
          <button onClick={showSolution}>
            <p className="text-primary-blue text-md font-blinker">
              I&apos;m stuck. Show me the solution!
            </p>
          </button>
        ) : null}
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-[#F5F4E260] border-t border-b border-primary-blue py-4 gap-2">
        <p className="font-semibold text-base text-primary-blue">
          Did you Know?
        </p>
        <p className="text-sm text-primary-blue px-4 text-center">{funfact}</p>
      </div>
    </div>
  );
};

export default YourCodeSection;
