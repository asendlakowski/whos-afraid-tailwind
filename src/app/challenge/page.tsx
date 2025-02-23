"use client";
import React, { useState, useEffect, Suspense } from "react";
import RecreateSection from "./RecreateSection";
import MonacoEditor from "../monacotest/monacoEditor";
import YourCodeSection from "./YourCodeSection";
import Image from "next/image";
import { levels } from "../leveltemplates/all_levels";
import { useSearchParams } from "next/navigation";

import type { Box } from "@/utils/BoxType";
import { get_box_data, compute_diff } from "@/utils/BoxUtils";

import Link from "next/link";
import Hamburger from "./Hamburger";

const ChallengeContent = () => {
  const searchParams = useSearchParams();
  const levelnum = searchParams.get("level");

  const [current_level, set_current_level] = useState(levels[0]);
  const [code, setCode] = useState<string>(""); //Change this to what the initial code is:
  const [fullscreen, setFullScreen] = useState<boolean>(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] =
    useState<boolean>(false);
  const [displayModelSoln, setDisplayModelSoln] = useState<boolean>(false);
  const [currBackground, setCurrBackground] = useState("#5D8AA1");
  const [recreateClosed, setRecreateClosed] = useState<boolean>(false);
  
  const onClickHandlePopup = () => {
    setIsCompleteModalOpen(true);
    console.log("printing to not error", displayModelSoln);
  };

  const onSubmitClicked = () => {
    const iframe: HTMLIFrameElement = document.getElementById(
      "user_code"
    ) as HTMLIFrameElement;

    if (!iframe) {
      throw new Error("Could not get user code iframe");
    }

    const user_root =
      iframe.contentDocument!.getElementsByClassName("canvas")[0];

    /* mark the user code with "user " classname extension
     * Made it a nested function to avoid passing in more params
     */
    const recurse_through_tree = (
      root: Element,
      canvas: Element,
      box_list: Box[]
    ) => {
      if (!root.children) {
        return;
      }

      const rootClassName = root.className;
      if (rootClassName) {
        if (rootClassName.includes("bg-")) {
          const box = get_box_data(root, canvas);
          box_list.push(box);
        }
      }

      for (let i = 0; i < root.children.length; i++) {
        const curr_elem = root.children[i];
        recurse_through_tree(curr_elem, canvas, box_list);
      }
    };

    const user_boxes: Box[] = [];
    recurse_through_tree(user_root, user_root, user_boxes);

    const soln_root = document.getElementsByClassName("soln_canvas");

    if (soln_root.length != 1) {
      console.log(soln_root);
      throw new Error("There is more than one canvas element");
    }

    const soln_boxes: Box[] = [];
    recurse_through_tree(soln_root[0], soln_root[0], soln_boxes);

    const diff = compute_diff(user_boxes, soln_boxes);
    console.log("diff: ", diff);
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

  useEffect(() => {
    if (displayModelSoln) {
      setCode(current_level.solution_str);
      setDisplayModelSoln(false);
    }
  }, [displayModelSoln]);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col" style={{background: currBackground}}>
      {fullscreen ? (
        <div className="grid grid-cols-1 w-screen h-full gap-5 pt-5 px-5 pb-5">
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
          className={`grid w-screen h-full gap-5 pt-5 px-5 pb-5 ease-in-out ${
            recreateClosed
              ? "grid-cols-[50px_minmax(0,3fr)_minmax(0,3fr)]"
              : "grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,3fr)]"
          }`}
        >
          {recreateClosed ? (
            <div className="flex flex-col justify-start items-center w-full h-full gap-2">
              <Hamburger />
              <button
                onClick={toggleLeftWindow}
                className="inline-flex justify-center w-full rounded-md px-3 py-1 text-white hover:bg-[#D7E1E8] hover:text-secondary-blue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <RecreateSection
              paintingWidth={current_level.w}
              paintingHeight={current_level.h}
              title={current_level.title}
              artist={current_level.artist}
              painting={current_level.solution}
              colors={current_level.colors}
              svg_name={current_level.svg_name}
              toggleLeftWindow={toggleLeftWindow}
              infoURL={current_level.infolink}
              setCurrBackground = {setCurrBackground}
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
                id="user_code"
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
            funfact={current_level.funfact}
            onSubmitClicked={onClickHandlePopup}
          />

          <button
            className="absolute bottom-10 right-48 rounded-md h-auto py-2 px-4 w-auto bg-black text-white"
            onClick={onSubmitClicked}
          >
            Submit
          </button>
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
              src={current_level.svg_name}
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
            <Link
              className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-full font-blinker text-sm"
              href={{
                pathname: "/challenge",
                query: {
                  level: String(
                    ((Number(levelnum) + 1) % levels.length).toString()
                  ),
                },
              }}
              onClick={() => setIsCompleteModalOpen(false)}
            >
              next challenge ={">"}
            </Link>
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
