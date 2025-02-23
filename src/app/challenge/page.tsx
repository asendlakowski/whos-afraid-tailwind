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
  const [percentAcc, setPercentAcc] = useState<number>(0);

  const onClickHandlePopup = () => {
    setIsCompleteModalOpen(true);
    console.log("printing to not error", displayModelSoln);
  };

  const showSolutionCode = () => {
    setDisplayModelSoln(true);
    setIsCompleteModalOpen(false);
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

    const percent_complete = Math.floor((1 - diff) * 100);
    console.log("diff as percent: ", percent_complete);

    setPercentAcc(percent_complete);

    if (percent_complete >= 80) {
      onClickHandlePopup();
    }
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
    <div
      className="w-screen h-screen overflow-hidden flex flex-col"
      style={{ background: currBackground }}
    >
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
                <Image src="Shrink.svg" alt="fun fact" width={18} height={18} />
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
              hint={current_level.hint}
              description={current_level.description}
              svg_name={current_level.svg_name}
              toggleLeftWindow={toggleLeftWindow}
              infoURL={current_level.infolink}
              setCurrBackground={setCurrBackground}
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
            onSubmitClicked={onSubmitClicked}
            percentAccurate={percentAcc}
            showSolution={showSolutionCode}
          />

          {/* <button
            className="absolute bottom-10 right-48 rounded-md h-auto py-2 px-4 w-auto bg-black text-white"
            onClick={onSubmitClicked}
          >
            Submit
          </button> */}
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

            {/* <p className="text-primary-blue text-xs font-blinker">
              You were so so close!
            </p> */}
            <div className="text-primary-blue text-xs font-blinker">
              Want to see our{" "}
              <span
                className="underline cursor-pointer"
                onClick={showSolutionCode}
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
              onClick={() => {
                setIsCompleteModalOpen(false);
                setPercentAcc(0);
              }}
            >
              <svg
                width="118"
                height="15"
                viewBox="0 0 118 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.96467 6.52557V11H0.16495V3.36364H1.88512V4.66122H1.97461C2.15027 4.23366 2.43034 3.89394 2.81481 3.64205C3.20259 3.39015 3.68152 3.2642 4.2516 3.2642C4.77859 3.2642 5.23763 3.37689 5.62873 3.60227C6.02314 3.82765 6.32807 4.15412 6.5435 4.58168C6.76225 5.00923 6.86997 5.52794 6.86665 6.13778V11H5.06694V6.41619C5.06694 5.90578 4.93436 5.50639 4.66921 5.21804C4.40737 4.92969 4.04445 4.78551 3.58043 4.78551C3.26557 4.78551 2.9855 4.85511 2.74023 4.99432C2.49828 5.13021 2.30771 5.32741 2.1685 5.58594C2.03261 5.84446 1.96467 6.15767 1.96467 6.52557ZM12.0769 11.1491C11.3113 11.1491 10.65 10.9901 10.0932 10.6719C9.53971 10.3504 9.11381 9.89631 8.81552 9.30966C8.51722 8.7197 8.36808 8.02533 8.36808 7.22656C8.36808 6.44105 8.51722 5.75166 8.81552 5.15838C9.11713 4.56179 9.53806 4.09777 10.0783 3.76633C10.6185 3.43158 11.2533 3.2642 11.9824 3.2642C12.4531 3.2642 12.8972 3.34044 13.3148 3.4929C13.7357 3.64205 14.1069 3.87405 14.4284 4.18892C14.7533 4.50379 15.0085 4.90483 15.1941 5.39205C15.3797 5.87595 15.4725 6.45265 15.4725 7.12216V7.67401H9.21325V6.46094H13.7473C13.744 6.11624 13.6694 5.80966 13.5236 5.54119C13.3778 5.26941 13.1739 5.05563 12.9121 4.89986C12.6536 4.74408 12.352 4.66619 12.0073 4.66619C11.6394 4.66619 11.3162 4.75568 11.0378 4.93466C10.7594 5.11032 10.5423 5.34233 10.3865 5.63068C10.2341 5.91572 10.1562 6.22893 10.1529 6.57031V7.62926C10.1529 8.07339 10.2341 8.45455 10.3965 8.77273C10.5589 9.08759 10.7859 9.32955 11.0776 9.49858C11.3693 9.6643 11.7106 9.74716 12.1017 9.74716C12.3636 9.74716 12.6006 9.7107 12.8127 9.63778C13.0248 9.56155 13.2087 9.45052 13.3645 9.30469C13.5203 9.15885 13.638 8.97822 13.7175 8.76278L15.3979 8.9517C15.2918 9.39583 15.0897 9.78362 14.7914 10.1151C14.4964 10.4432 14.1185 10.6984 13.6578 10.8807C13.1971 11.0597 12.6702 11.1491 12.0769 11.1491ZM18.3026 3.36364L19.8438 6.18253L21.4098 3.36364H23.3139L21.0121 7.18182L23.3537 11H21.4595L19.8438 8.25071L18.2429 11H16.3338L18.6605 7.18182L16.3935 3.36364H18.3026ZM28.5192 3.36364V4.75568H24.1293V3.36364H28.5192ZM25.2131 1.53409H27.0128V8.70312C27.0128 8.94508 27.0492 9.13068 27.1222 9.25994C27.1984 9.38589 27.2978 9.47206 27.4205 9.51847C27.5431 9.56487 27.679 9.58807 27.8281 9.58807C27.9408 9.58807 28.0436 9.57978 28.1364 9.56321C28.2325 9.54664 28.3054 9.53172 28.3551 9.51847L28.6584 10.9254C28.5623 10.9586 28.4247 10.995 28.2457 11.0348C28.0701 11.0746 27.8546 11.0978 27.5994 11.1044C27.1487 11.1177 26.7427 11.0497 26.3814 10.9006C26.0201 10.7481 25.7334 10.5128 25.5213 10.1946C25.3125 9.87642 25.2098 9.47869 25.2131 9.00142V1.53409ZM36.8279 11.1491C36.0656 11.1491 35.411 10.9818 34.8642 10.647C34.3206 10.3123 33.9013 9.84991 33.6064 9.25994C33.3147 8.66667 33.1689 7.9839 33.1689 7.21165C33.1689 6.43608 33.318 5.75166 33.6163 5.15838C33.9146 4.56179 34.3355 4.09777 34.8791 3.76633C35.426 3.43158 36.0723 3.2642 36.818 3.2642C37.4378 3.2642 37.9863 3.37855 38.4636 3.60724C38.9442 3.83262 39.327 4.15246 39.612 4.56676C39.8971 4.97775 40.0595 5.45833 40.0993 6.00852H38.3791C38.3095 5.64062 38.1438 5.33404 37.8819 5.08878C37.6234 4.8402 37.277 4.71591 36.8429 4.71591C36.475 4.71591 36.1518 4.81534 35.8734 5.0142C35.595 5.20975 35.3779 5.49148 35.2221 5.85938C35.0697 6.22727 34.9934 6.66809 34.9934 7.18182C34.9934 7.70218 35.0697 8.14962 35.2221 8.52415C35.3746 8.89536 35.5884 9.18205 35.8635 9.38423C36.1419 9.5831 36.4683 9.68253 36.8429 9.68253C37.108 9.68253 37.345 9.63281 37.5538 9.53338C37.7659 9.43063 37.9432 9.28314 38.0858 9.09091C38.2283 8.89867 38.3261 8.66501 38.3791 8.38991H40.0993C40.0562 8.93016 39.8971 9.40909 39.622 9.8267C39.3469 10.241 38.9724 10.5658 38.4984 10.8011C38.0244 11.0331 37.4676 11.1491 36.8279 11.1491ZM43.3768 6.52557V11H41.5771V0.818182H43.337V4.66122H43.4265C43.6055 4.23035 43.8822 3.89062 44.2567 3.64205C44.6346 3.39015 45.1152 3.2642 45.6985 3.2642C46.2288 3.2642 46.6912 3.37524 47.0856 3.5973C47.48 3.81937 47.7849 4.14418 48.0004 4.57173C48.2191 4.99929 48.3285 5.52131 48.3285 6.13778V11H46.5288V6.41619C46.5288 5.90246 46.3962 5.50308 46.131 5.21804C45.8692 4.92969 45.5013 4.78551 45.0273 4.78551C44.7092 4.78551 44.4241 4.85511 44.1722 4.99432C43.9237 5.13021 43.7281 5.32741 43.5856 5.58594C43.4464 5.84446 43.3768 6.15767 43.3768 6.52557ZM52.3604 11.1541C51.8765 11.1541 51.4407 11.0679 51.0529 10.8956C50.6684 10.7199 50.3635 10.4614 50.1381 10.12C49.9161 9.77865 49.805 9.35772 49.805 8.85724C49.805 8.42637 49.8846 8.07008 50.0437 7.78835C50.2028 7.50663 50.4199 7.28125 50.695 7.11222C50.9701 6.94318 51.2799 6.81558 51.6246 6.7294C51.9727 6.63991 52.3323 6.57528 52.7035 6.53551C53.1509 6.48911 53.5138 6.44768 53.7923 6.41122C54.0707 6.37145 54.2728 6.31179 54.3988 6.23224C54.5281 6.14938 54.5927 6.02178 54.5927 5.84943V5.8196C54.5927 5.44508 54.4817 5.15507 54.2596 4.94957C54.0375 4.74408 53.7177 4.64134 53.3001 4.64134C52.8593 4.64134 52.5096 4.73745 52.2511 4.92969C51.9959 5.12192 51.8235 5.34896 51.734 5.6108L50.0536 5.37216C50.1862 4.90814 50.4049 4.52036 50.7099 4.20881C51.0148 3.89394 51.3877 3.65862 51.8285 3.50284C52.2693 3.34375 52.7565 3.2642 53.2901 3.2642C53.658 3.2642 54.0243 3.30729 54.3888 3.39347C54.7534 3.47964 55.0865 3.62216 55.3881 3.82102C55.6897 4.01657 55.9317 4.28338 56.114 4.62145C56.2996 4.95952 56.3924 5.3821 56.3924 5.8892V11H54.6623V9.95099H54.6026C54.4933 10.1631 54.3391 10.362 54.1403 10.5476C53.9447 10.7299 53.6978 10.8774 53.3995 10.9901C53.1045 11.0994 52.7582 11.1541 52.3604 11.1541ZM52.8278 9.83168C53.189 9.83168 53.5022 9.76042 53.7674 9.6179C54.0326 9.47206 54.2364 9.27983 54.3789 9.04119C54.5247 8.80256 54.5977 8.54238 54.5977 8.26065V7.3608C54.5413 7.4072 54.4452 7.45028 54.3093 7.49006C54.1767 7.52983 54.0276 7.56463 53.8619 7.59446C53.6961 7.62429 53.5321 7.6508 53.3697 7.67401C53.2073 7.69721 53.0664 7.71709 52.9471 7.73366C52.6786 7.77012 52.4383 7.82978 52.2262 7.91264C52.0141 7.9955 51.8467 8.11151 51.7241 8.26065C51.6014 8.40649 51.5401 8.59541 51.5401 8.82741C51.5401 9.15885 51.6611 9.40909 51.9031 9.57812C52.145 9.74716 52.4532 9.83168 52.8278 9.83168ZM60.0018 0.818182V11H58.2021V0.818182H60.0018ZM63.6522 0.818182V11H61.8525V0.818182H63.6522ZM68.8835 11.1491C68.1179 11.1491 67.4567 10.9901 66.8999 10.6719C66.3464 10.3504 65.9205 9.89631 65.6222 9.30966C65.3239 8.7197 65.1747 8.02533 65.1747 7.22656C65.1747 6.44105 65.3239 5.75166 65.6222 5.15838C65.9238 4.56179 66.3447 4.09777 66.8849 3.76633C67.4252 3.43158 68.0599 3.2642 68.7891 3.2642C69.2597 3.2642 69.7038 3.34044 70.1214 3.4929C70.5424 3.64205 70.9136 3.87405 71.2351 4.18892C71.5599 4.50379 71.8151 4.90483 72.0007 5.39205C72.1863 5.87595 72.2791 6.45265 72.2791 7.12216V7.67401H66.0199V6.46094H70.554C70.5507 6.11624 70.4761 5.80966 70.3303 5.54119C70.1844 5.26941 69.9806 5.05563 69.7188 4.89986C69.4602 4.74408 69.1586 4.66619 68.8139 4.66619C68.446 4.66619 68.1229 4.75568 67.8445 4.93466C67.5661 5.11032 67.349 5.34233 67.1932 5.63068C67.0407 5.91572 66.9628 6.22893 66.9595 6.57031V7.62926C66.9595 8.07339 67.0407 8.45455 67.2031 8.77273C67.3655 9.08759 67.5926 9.32955 67.8842 9.49858C68.1759 9.6643 68.5173 9.74716 68.9084 9.74716C69.1702 9.74716 69.4072 9.7107 69.6193 9.63778C69.8314 9.56155 70.0154 9.45052 70.1712 9.30469C70.3269 9.15885 70.4446 8.97822 70.5241 8.76278L72.2045 8.9517C72.0985 9.39583 71.8963 9.78362 71.598 10.1151C71.303 10.4432 70.9252 10.6984 70.4645 10.8807C70.0038 11.0597 69.4768 11.1491 68.8835 11.1491ZM75.6014 6.52557V11H73.8017V3.36364H75.5218V4.66122H75.6113C75.787 4.23366 76.0671 3.89394 76.4515 3.64205C76.8393 3.39015 77.3182 3.2642 77.8883 3.2642C78.4153 3.2642 78.8743 3.37689 79.2654 3.60227C79.6599 3.82765 79.9648 4.15412 80.1802 4.58168C80.399 5.00923 80.5067 5.52794 80.5034 6.13778V11H78.7037V6.41619C78.7037 5.90578 78.5711 5.50639 78.3059 5.21804C78.0441 4.92969 77.6812 4.78551 77.2172 4.78551C76.9023 4.78551 76.6222 4.85511 76.377 4.99432C76.135 5.13021 75.9444 5.32741 75.8052 5.58594C75.6693 5.84446 75.6014 6.15767 75.6014 6.52557ZM85.6539 14.0227C85.0076 14.0227 84.4525 13.9349 83.9885 13.7592C83.5244 13.5869 83.1516 13.3549 82.8699 13.0632C82.5881 12.7715 82.3926 12.4484 82.2832 12.0938L83.9039 11.701C83.9769 11.8501 84.0829 11.9976 84.2221 12.1435C84.3613 12.2926 84.5486 12.4152 84.7839 12.5114C85.0225 12.6108 85.3225 12.6605 85.6838 12.6605C86.1942 12.6605 86.6168 12.5362 86.9515 12.2876C87.2863 12.0424 87.4537 11.638 87.4537 11.0746V9.62784H87.3642C87.2714 9.81345 87.1355 10.004 86.9565 10.1996C86.7808 10.3951 86.5472 10.5592 86.2555 10.6918C85.9672 10.8243 85.6042 10.8906 85.1667 10.8906C84.5801 10.8906 84.0481 10.7531 83.5708 10.478C83.0969 10.1996 82.719 9.78527 82.4373 9.23509C82.1589 8.68158 82.0197 7.98887 82.0197 7.15696C82.0197 6.31842 82.1589 5.6108 82.4373 5.03409C82.719 4.45407 83.0985 4.01491 83.5758 3.71662C84.0531 3.41501 84.585 3.2642 85.1717 3.2642C85.6191 3.2642 85.987 3.34044 86.2754 3.4929C86.5671 3.64205 86.7991 3.82268 86.9714 4.0348C87.1438 4.24361 87.2747 4.44081 87.3642 4.62642H87.4636V3.36364H89.2385V11.1243C89.2385 11.7772 89.0827 12.3175 88.7711 12.745C88.4596 13.1726 88.0337 13.4924 87.4934 13.7045C86.9532 13.9167 86.34 14.0227 85.6539 14.0227ZM85.6689 9.47869C86.05 9.47869 86.3748 9.38589 86.6433 9.20028C86.9118 9.01468 87.1156 8.74787 87.2548 8.39986C87.394 8.05185 87.4636 7.63423 87.4636 7.14702C87.4636 6.66643 87.394 6.2455 87.2548 5.88423C87.1189 5.52296 86.9167 5.2429 86.6483 5.04403C86.3831 4.84186 86.0566 4.74077 85.6689 4.74077C85.2678 4.74077 84.9331 4.84517 84.6646 5.05398C84.3961 5.26278 84.194 5.54948 84.0581 5.91406C83.9222 6.27533 83.8542 6.68632 83.8542 7.14702C83.8542 7.61435 83.9222 8.02367 84.0581 8.375C84.1973 8.72301 84.4011 8.99479 84.6696 9.19034C84.9413 9.38258 85.2744 9.47869 85.6689 9.47869ZM94.4636 11.1491C93.698 11.1491 93.0368 10.9901 92.4799 10.6719C91.9264 10.3504 91.5005 9.89631 91.2022 9.30966C90.9039 8.7197 90.7548 8.02533 90.7548 7.22656C90.7548 6.44105 90.9039 5.75166 91.2022 5.15838C91.5038 4.56179 91.9248 4.09777 92.465 3.76633C93.0053 3.43158 93.64 3.2642 94.3691 3.2642C94.8398 3.2642 95.2839 3.34044 95.7015 3.4929C96.1225 3.64205 96.4937 3.87405 96.8152 4.18892C97.14 4.50379 97.3952 4.90483 97.5808 5.39205C97.7664 5.87595 97.8592 6.45265 97.8592 7.12216V7.67401H91.6V6.46094H96.1341C96.1307 6.11624 96.0562 5.80966 95.9103 5.54119C95.7645 5.26941 95.5607 5.05563 95.2988 4.89986C95.0403 4.74408 94.7387 4.66619 94.394 4.66619C94.0261 4.66619 93.7029 4.75568 93.4245 4.93466C93.1461 5.11032 92.929 5.34233 92.7733 5.63068C92.6208 5.91572 92.5429 6.22893 92.5396 6.57031V7.62926C92.5396 8.07339 92.6208 8.45455 92.7832 8.77273C92.9456 9.08759 93.1726 9.32955 93.4643 9.49858C93.756 9.6643 94.0974 9.74716 94.4885 9.74716C94.7503 9.74716 94.9873 9.7107 95.1994 9.63778C95.4115 9.56155 95.5955 9.45052 95.7512 9.30469C95.907 9.15885 96.0247 8.97822 96.1042 8.76278L97.7846 8.9517C97.6786 9.39583 97.4764 9.78362 97.1781 10.1151C96.8831 10.4432 96.5053 10.6984 96.0446 10.8807C95.5839 11.0597 95.0569 11.1491 94.4636 11.1491ZM112.561 11.3679L111.537 10.3537L115.346 6.54545L111.537 2.74219L112.561 1.72301L117.384 6.54545L112.561 11.3679ZM107.152 8.55398V7.11222H115.858L114.406 8.55398H107.152ZM107.152 5.97869V4.53693H114.406L115.858 5.97869H107.152Z"
                  fill="white"
                />
              </svg>
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
