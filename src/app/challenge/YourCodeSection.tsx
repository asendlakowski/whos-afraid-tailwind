import React, { ReactNode } from "react";
import Image from "next/image";

interface YourCodeSectionProps {
  frame: ReactNode;
  onSubmitClicked: () => void;
}

const YourCodeSection = (props: YourCodeSectionProps) => {
  const { frame } = props;
  return (
    <div className="bg-[#FFFFFFC0] w-full h-full rounded-xl flex flex-col justify-center items-center gap-4">
      <p className="text-primary-blue font-rb font-bold text-2xl text-center">
        YOUR CODE OUTPUT
      </p>
      {frame}
      <button
        onClick={() => {props.onSubmitClicked()}}
        className="flex flex-row justify-center items-center gap-2 bg-primary-blue py-2 px-4 rounded-full border drop-shadow-xl"
      >
        <Image src="sendicon.svg" alt="send icon" width={12} height={12} />
        <p className="text-white font-rb font-semibold text-base ">
          SUBMIT MY ANSWER
        </p>
      </button>

      <div className="flex flex-col justify-center items-center w-full bg-[#F5F4E260] border-t border-b border-primary-blue my-10 py-4 gap-2 ">
        <p className="font-semibold text-base text-primary-blue">
          Did you Know?
        </p>
        <p className="text-sm text-primary-blue px-4 text-center">
          Theres a pretty fun fact about this painting out there but we have not
          added it in yet!
        </p>
      </div>
    </div>
  );
};

export default YourCodeSection;
