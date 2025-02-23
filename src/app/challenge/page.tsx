"use client";
import React, { useState, useEffect, Suspense } from "react";
import RecreateSection from "./RecreateSection";
import MonacoEditor from "../monacotest/monacoEditor";
import YourCodeSection from "./YourCodeSection";
import Image from "next/image";
import { levels } from "../leveltemplates/all_levels";
import { useSearchParams } from "next/navigation";

const ChallengeContent = () => {
  const searchParams = useSearchParams();
  const levelnum = searchParams.get("level");

  const [current_level, set_current_level] = useState(levels[0]);
  const [code, setCode] = useState<string>(""); //Change this to what the initial code is:
  const [fullscreen, setFullScreen] = useState<boolean>(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] =
    useState<boolean>(false);
  const [displayModelSoln, setDisplayModelSoln] = useState<boolean>(false);
  const [recreateClosed, setRecreateClosed] = useState<boolean>(false);

  const onSubmitClicked = () => {
    setIsCompleteModalOpen(true);
    console.log("printing to not error", displayModelSoln);
  };

  useEffect(() => {
    set_current_level(levelnum ? levels[Number(levelnum)] : levels[0]);
  }, [levelnum]);

  useEffect(() => {
    setCode(current_level.start);
  }, [current_level]);

  const toggleLeftWindow = () => {
    setRecreateClosed(!recreateClosed);
  };
  return (
    <div className="w-screen h-screen bg-secondary-blue">
      {fullscreen ? (
        <div className="grid grid-cols-1 w-screen h-screen gap-5 pt-5 px-5 pb-5">
          <div className="bg-white w-full h-full opacity-75 rounded-xl">
            <div className="flex justify-end space-x-4 mt-4 mr-4">
              <button
                className="bg-primary-blue text-white font-rb rounded-md px-3 py-0.5"
                // Reset to the intial value
                onClick={() => setCode(current_level.start)}
              >
                reset
              </button>
              <button onClick={() => setFullScreen(false)}>
                <Image src="Vector.svg" alt="fun fact" width={18} height={18} />
              </button>
            </div>
            <MonacoEditor code={code} setCode={setCode} />
          </div>
        </div>
      ) : (
        <div
          className={`grid w-screen h-screen gap-5 pt-10 px-5 pb-5 ease-in-out ${
            recreateClosed
              ? "grid-cols-[50px_minmax(0,3fr)_minmax(0,3fr)]"
              : "grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,3fr)]"
          }`}
        >
          {recreateClosed ? (
            <button
              onClick={toggleLeftWindow}
              className="flex justify-center items-center bg-[#FFFFFFB0] w-full h-full rounded-xl"
            >
              <Image
                src="caret.svg"
                alt="reopen window button"
                width={24}
                height={24}
                className="fill-white stroke-white"
              />
            </button>
          ) : (
            <RecreateSection
              paintingWidth={current_level.w}
              paintingHeight={current_level.h}
              title={current_level.title}
              artist={current_level.artist}
              painting={current_level.solution}
              colors={current_level.colors}
              toggleLeftWindow={toggleLeftWindow}
            />
          )}
          <div className="bg-white w-full h-full opacity-75 rounded-xl">
            <div className="flex justify-end space-x-4 mt-4 mr-4">
              <button
                className="bg-primary-blue text-white font-rb rounded-md px-3 py-0.5"
                // Reset to the intial value
                onClick={() => setCode(current_level.start)}
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
                className={`bg-black w-[${current_level.w}px] h-[${current_level.h}px] m-2`}
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

            <p className="text-xl font-blinker font-bold py-4">
              Congrats!! You Passed! &#127881;
            </p>

            <Image
              className="m-2 w-full max-h-[300px] mx-auto drop-shadow-2xl border-8 rounded-lg border-[#D4D4D4]"
              src="/paintings/whos_afraid_of_ryb.svg"
              alt="level"
              height={50}
              width={50}
              priority
            />

            <p className="text-primary-blue text-xs font-blinker">
              You were so so close!
            </p>
            <div className="text-primary-blue text-xs font-blinker">
              Want to see our{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  setDisplayModelSoln(true);
                  setIsCompleteModalOpen(false);
                }}
              >
                model solution?
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-full font-blinker text-sm">
              next challenge ={">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Challenge = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <ChallengeContent />
  </Suspense>
);

export default Challenge;
