import { ClientPageRoot } from "next/dist/client/components/client-page";

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

export default function compute_difference(
  user_code: string,
  soln_code: string,
) {
  console.log(user_code);
  console.log(soln_code);

  return 0.0;
}
