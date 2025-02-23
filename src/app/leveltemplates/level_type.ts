import { ReactNode } from "react";

export interface level_name {
  title: string;
  artist: string;
  start: string;
  solution: ReactNode;
  solution_str: string;
  svg_name: string;
  hint: string;
  colors: string[];
  w: number;
  h: number;
  infolink: string;
}
