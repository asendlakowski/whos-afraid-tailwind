import { ReactNode } from "react";

export interface level_name{
    title: string;
    artist: string;
    start: string;
    solution: ReactNode;
    svg_name: string;
    hint: string;
    colors: string[];
    w: number;
    h: number;
}