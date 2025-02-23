"use client";
import React, { useState } from "react";
import RecreateSection from "./RecreateSection";
import MonacoEditor from "../monacotest/monacoEditor";
import YourCodeSection from "./YourCodeSection";
import Image from "next/image";

const Challenge = () => {
  //Change this to what the initial code is:
  const [code, setCode] = useState<string>("Hello World");
  const [fullscreen, setFullScreen] = useState<boolean>(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
  const [displayModelSoln, setDisplayModelSoln] = useState<boolean>(false);

  const onSubmitClicked = () => {
    setIsCompleteModalOpen(true);
  }

  return (
    <div className="w-screen h-screen bg-secondary-blue">
      {fullscreen ? (
        <div className="grid grid-cols-1 w-screen h-screen gap-5 pt-5 px-5 pb-5">
          <div className="bg-white w-full h-full opacity-75 rounded-xl">
            <div className="flex justify-end space-x-4 mt-4 mr-4">
              <button onClick={() => setFullScreen(false)}>
                <Image src="Vector.svg" alt="fun fact" width={18} height={18} />
              </button>
            </div>
            <MonacoEditor code={code} setCode={setCode} />
          </div>
        </div>
      ) : (
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
          <div className="bg-white w-full h-full opacity-75 rounded-xl">
            <div className="flex justify-end space-x-4 mt-4 mr-4">
              <button
                className="bg-primary-blue text-white font-rb rounded-md px-3 py-0.5"
                // Reset to the intial value
                onClick={() => setCode("")}
              >
                reset
              </button>
              <button onClick={() => setFullScreen(true)}>
                <Image src="Vector.svg" alt="fun fact" width={18} height={18} />
              </button>
            </div>
            <MonacoEditor code={code} setCode={setCode} />
          </div>
          <YourCodeSection
            frame={
              <iframe
                title="output"
                className="bg-black w-[300px] h-[420px]"
                srcDoc={`
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="https://cdn.tailwindcss.com"></script>
                    <style>
                      body { margin: 0; padding: 0; }
                    </style>
                  </head>
                  <body>
                    ${code}
                  </body>
                </html>
                `}
              />
            }
            onSubmitClicked={onSubmitClicked}
          />
        </div>
      )}
      {isCompleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-[#F6F6F6] rounded-xl text-black flex flex-col justify-center items-center py-10 px-20">
            <button 
              onClick={() => setIsCompleteModalOpen(false)} 
              className="absolute top-5 right-5"
            >
              <Image
                src="xicon.svg"
                alt="Close"
                width={30}
                height={30}
                className="invert"
              />
            </button>

            <p className="text-xl font-blinker font-bold py-4">Congrats!! You Passed! &#127881;</p>

            <Image
              className="m-2 w-full max-h-[300px] mx-auto drop-shadow-2xl border-8 rounded-lg border-[#D4D4D4]"
              src="/paintings/whos_afraid_of_ryb.svg"
              alt="level"
              height={50} 
              width={50}
              priority
            />

            <p className="text-primary-blue text-xs font-blinker">You were so so close!</p>
            <div className="text-primary-blue text-xs font-blinker">
              Want to see our <span className="underline cursor-pointer" onClick={() => {setDisplayModelSoln(true); setIsCompleteModalOpen(false);}} >model solution?</span>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-full font-blinker text-sm"
            >
              next challenge ={'>'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
