import { Box } from "@/utils/BoxType";

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

  const box: Box = {
    is_accounted_for: false,
    top_left: {
      x: Math.min(coord_info.left, coord_info.right) - canvas_coords.left,
      y: Math.min(coord_info.top, coord_info.bottom) - canvas_coords.top,
    },

    bottom_right: {
      x: Math.max(coord_info.left, coord_info.right) - canvas_coords.left,
      y: Math.max(coord_info.top, coord_info.bottom) - canvas_coords.top,
    },
    /* top_left: {
      x: coord_info.left - canvas_coords.left,
      y: coord_info.top - canvas_coords.top,
    }, */

    /* bottom_right: {
      x: canvas_coords.right - coord_info.right,
      y: canvas_coords.bottom - coord_info.bottom,
    }, */

    /* bottom_right: {
      x: coord_info.right - canvas_coords.right,
      y: coord_info.bottom - canvas_coords.bottom,
    }, */

    width: coord_info.right - coord_info.left,
    height: coord_info.bottom - coord_info.top,

    red: parseInt(rgb_vals[0]),
    green: parseInt(rgb_vals[1]),
    blue: parseInt(rgb_vals[2]),
  };

  return box;
};

const is_both_close_by = (user_box: Box, soln_box: Box) => {
  return (
    soln_box.top_left.x == user_box.top_left.x &&
    soln_box.top_left.y == user_box.top_left.y &&
    soln_box.bottom_right.x == user_box.bottom_right.x &&
    soln_box.bottom_right.y == user_box.bottom_right.y
  );
};

const compute_diff = (user_boxes: Box[], soln_boxes: Box[]) => {
  const diff_subsections = soln_boxes.length;

  const local_diffs: number[] = [];

  for (let i = 0; i < diff_subsections; i++) {
    const soln_box = soln_boxes[i];
    for (let j = 0; j < user_boxes.length; j++) {
      const user_box = user_boxes[j];

      if (is_both_close_by(user_box, soln_box)) {
        soln_box.is_accounted_for = true;
        user_box.is_accounted_for = true;

        let local_diff = 0.0;
        const rgb_denominator = 255;

        const red_diff =
          (soln_box.red / rgb_denominator - user_box.red / rgb_denominator) **
          2;
        const green_diff =
          (soln_box.green / rgb_denominator -
            user_box.green / rgb_denominator) **
          2;
        const blue_diff =
          (soln_box.blue / rgb_denominator - user_box.blue / rgb_denominator) **
          2;

        const color_diff = Math.sqrt(red_diff + green_diff + blue_diff);

        if (color_diff > 0.0) {
          local_diff += 1 / diff_subsections / 2;
        }

        local_diffs.push(local_diff);
      }
    }
  }

  let diff = local_diffs.reduce((acc, diff) => (acc += diff), 0);

  const num_accounted_for = soln_boxes.reduce(
    (a, box) => (a += box.is_accounted_for ? 1 : 0),
    0,
  );

  if (num_accounted_for != diff_subsections) {
    if (diff_subsections > num_accounted_for) {
      for (let i = 0; i < diff_subsections - num_accounted_for; i++) {
        diff += 1 / diff_subsections;
      }
    }
  }

  return diff;
};

export { get_box_data, compute_diff };
