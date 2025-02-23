type Coord = {
  x: number;
  y: number;
};

type Box = {
  /* useful for general divs */
  top_left: Coord;
  bottom_right: Coord;

  /* useful for computing rounded-full divs */
  mid_top: Coord;
  mid_bottom: Coord;
  mid_left: Coord;
  mid_right: Coord;

  width: number;
  height: number;
  red: number;
  green: number;
  blue: number;
  is_accounted_for: boolean;
  classname: string;

  html_elem: Element;
};

export type { Coord, Box };
