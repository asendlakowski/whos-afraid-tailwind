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
  is_accounted_for: boolean;
};

export type { Coord, Box };
