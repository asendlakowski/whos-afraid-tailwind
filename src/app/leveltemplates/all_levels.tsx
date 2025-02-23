import { level_name } from "./level_type";

export const level1: level_name = {
  title: "Who's Afraid of Red, Yellow, and Blue I",
  artist: "Barnett Newman",
  start: `<div class="w-screen h-screen bg-[#cd0000]">\n\t<div/>\n\t<div/>\n</div>`,
  solution: (
    <div className="w-[300px] h-[420px] bg-[#cd0000] flex flex-row justify-between">
      <div className="w-3 h-full bg-[#02007f]"></div>
      <div className="w-1 h-full bg-[#fec800]"></div>
    </div>
  ),
  solution_str: `<div class="w-[300px] h-[420px] bg-[#cd0000] flex flex-row justify-between">
  <div class="w-3 h-full bg-[#02007f]"></div>
  <div class="w-1 h-full bg-[#fec800]"></div>
</div>`,
  svg_name: "/paintings/whos_afraid_of_ryb.svg",
  hint: "string",
  colors: ["#CD0000", "#02007F", "#FEC800"],
  w: 300,
  h: 420,
};

export const level2: level_name = {
  title: "Unnamed",
  artist: "Mika Tajima",
  start: `<div class="w-screen h-screen"/>`,
  solution: (
    <div className="w-[300px] h-[420px] bg-gradient-to-b from-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>
  ),
  solution_str: `<div class="w-[300px] h-[420px] bg-gradient-to-b from-[#0B111B] via-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>`,
  svg_name: "/paintings/mikatajima.png",
  hint: "string",
  colors: ["#0B111B","#00275A","#01285C","#01113D","#002759","#01242F","#516F6B"],
  w: 300,
  h: 420,
};

export const level3: level_name = {
  title: "The Swan No. 17",
  artist: "Hilma Af Klint",
  start: '',
  solution: (
    <div className="w-[300px] h-[300px] bg-[#A95139] relative flex items-center justify-center">
      <div className="w-[160px] h-[160px] bg-[#5684C1] rounded-full"></div>
      <div className="absolute left-[23%] w-[80px] h-[160px] bg-[#DCD7CC] rounded-l-full"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] flex">
        <div className="w-1/2 h-full bg-[#262427] rounded-l-full"></div>
        <div className="w-1/2 h-full bg-[#D5B651] rounded-r-full"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] flex">
          <div className="w-1/2 h-full bg-[#262427] rounded-l-full"></div>
          <div className="w-1/2 h-full bg-[#D28C74] rounded-r-full"></div>
        </div>
      </div>
    </div>
  ),
  solution_str: `<div class="w-[300px] h-[300px] bg-[#A95139] relative flex items-center justify-center">
  <div class="w-[160px] h-[160px] bg-[#5684C1] rounded-full"></div>
  <div class="absolute left-[23%] w-[80px] h-[160px] bg-[#DCD7CC] rounded-l-full"></div>
  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] flex">
    <div class="w-1/2 h-full bg-[#262427] rounded-l-full"></div>
    <div class="w-1/2 h-full bg-[#D5B651] rounded-r-full"></div>
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] flex">
      <div class="w-1/2 h-full bg-[#262427] rounded-l-full"></div>
      <div class="w-1/2 h-full bg-[#D28C74] rounded-r-full"></div>
    </div>
  </div>
</div>`,
  svg_name: "/paintings/swan_no_17.svg",
  hint: "string",
  colors: ["#A95139", "#DCD7CC", "#262427", "#D28C74", "#D5B651", "#5684C1"],
  w: 300,
  h: 300,
};

export const levels: level_name[] = [level1, level2, level3];
