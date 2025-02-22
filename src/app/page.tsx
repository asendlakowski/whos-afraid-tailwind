"use client";

import React, { useEffect, useState } from "react";

type Coord = {
  x: number;
  y: number;
};

type Box = {
  top_left: Coord;
  bottom_right: Coord;
  width: number;
  height: number;
  red: number;
  green: number;
  blue: number;
};

/* TODO: FIX THIS ANY TYPE ON THIS FUNCTION SIGNATURE */
const get_box_data = (html_elem: Element, canvas: Element) => {
  const computed_styles = window.getComputedStyle(html_elem);

  const rgb_vals = computed_styles.backgroundColor
    .replace("rgb(", "")
    .replace(")", "")
    .split(",");

  const bound_box = html_elem.getClientRects();

  if (!bound_box) {
    throw new Error("COULD NOT GET BOUNDING BOX OF HTML ELEM");
  }

  if (bound_box.length != 1) {
    throw new Error("THERE IS MORE THAN ONE BOUNDING BOX");
  }

  const canvas_bound_box = canvas.getClientRects();

  if (!canvas_bound_box) {
    throw new Error("COULD NOT GET BOUNDING BOX OF HTML ELEM");
  }

  if (canvas_bound_box.length != 1) {
    throw new Error("THERE IS MORE THAN ONE BOUNDING BOX");
  }

  const coord_info = bound_box[0];
  const canvas_coords = canvas_bound_box[0];

  console.log(rgb_vals);

  const box: Box = {
    top_left: {
      x: coord_info.left - canvas_coords.left,
      y: coord_info.top - canvas_coords.top,
    },

    bottom_right: {
      x: canvas_coords.right - coord_info.right,
      y: canvas_coords.bottom - coord_info.bottom,
    },

    width: coord_info.right - coord_info.left,
    height: coord_info.bottom - coord_info.top,

    red: parseInt(rgb_vals[0]),
    green: parseInt(rgb_vals[1]),
    blue: parseInt(rgb_vals[2]),
  };

  return box;
};

export default function Home() {
  const [solnCoords, setSolnCoords] = useState<Box[]>([]);
  const [score, setScore] = useState<number>(Number.NEGATIVE_INFINITY);

  useEffect(() => {
    if (!document) {
      return;
    }

    const canvas = document.getElementsByClassName("soln_canvas");

    if (canvas.length != 1) {
      throw new Error("CANVAS CONTAINS MORE THAN ONE CHILD");
    }

    const boxes: Box[] = [];

    const user_divs = document.getElementsByClassName("soln");
    for (let i = 0; i < user_divs.length; i++) {
      const html_elem = user_divs[i];

      if (html_elem.className.includes("bg")) {
        const box = get_box_data(html_elem, canvas[0]);
        boxes.push(box);
      }
    }

    setSolnCoords(boxes);
  }, []);

  const compute_diff = () => {
    if (!document) {
      return;
    }

    const canvas = document.getElementsByClassName("canvas");

    if (canvas.length != 1) {
      throw new Error("CANVAS CONTAINS MORE THAN ONE CHILD");
    }

    const boxes: Box[] = [];

    const user_divs = document.getElementsByClassName("user");
    for (let i = 0; i < user_divs.length; i++) {
      const html_elem = user_divs[i];

      if (html_elem.className.includes("bg")) {
        const box = get_box_data(html_elem, canvas[0]);
        boxes.push(box);
      }
    }

    let diff = 0;

    for (let i = 0; i < solnCoords.length; i++) {
      const soln_box = solnCoords[i];
      for (let j = 0; i < boxes.length; i++) {
        const user_box = boxes[j];

        if (
          soln_box.top_left.x == user_box.top_left.x &&
          soln_box.top_left.y == user_box.top_left.y
        ) {
          console.log("found exact");
          const red_diff = (soln_box.red / 255 - user_box.red / 255) ** 2;
          const green_diff = (soln_box.green / 255 - user_box.green / 255) ** 2;
          const blue_diff = (soln_box.blue / 255 - user_box.blue / 255) ** 2;

          console.log(red_diff);
          console.log(blue_diff);
          console.log(green_diff);

          diff += Math.sqrt(red_diff + green_diff + blue_diff);
        }
      }
    }

    setScore(diff);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
        <button
          className="h-fit w-fit text-black px-2 py-4 rounded-md bg-white active:scale-95"
          onClick={compute_diff}
        >
          Compute Difference
        </button>

        {score == Number.NEGATIVE_INFINITY ? null : (
          <div className="bg-white text-black p-4 rounded-md">
            diff: {score}
          </div>
        )}
      </div>

      <div className="flex flex-row items-center justify-between h-full w-full ">
        <div className="soln_canvas h-auto w-full flex gap-x-2 bg-black border border-white">
          <div className="soln flex flex-col items-center justify-start gap-y-2">
            <div className="soln flex h-full w-[50px] items-start justify-start bg-red-400"></div>
            <div className="soln flex h-full w-[50px] items-start justify-start bg-blue-400"></div>
          </div>
          <div className="soln flex h-[150px] w-full items-start justify-start bg-green-500"></div>
        </div>
        <div className="canvas h-auto w-full flex gap-x-2 bg-black border border-white">
          <div className="user flex flex-col items-center justify-start gap-y-2">
            <div className="user flex h-full w-[50px] items-start justify-start bg-red-500"></div>
            <div className="user flex h-full w-[50px] items-start justify-start bg-blue-500"></div>
          </div>
          <div className="user flex h-[150px] w-full items-start justify-start bg-green-500"></div>
        </div>
      </div>
    </div>
  );
}
