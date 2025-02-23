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
  infolink: "https://www.moma.org/artists/4285-barnett-newman",
};

export const level2: level_name = {
  title: "Unnamed",
  artist: "Mika Tajima",
  start: `<div class="w-screen h-screen"/>`,
  solution: (
    <div className="w-[300px] h-[420px] bg-gradient-to-b from-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>
  ),
  solution_str: `<div class="w-[300px] h-[420px] bg-gradient-to-b from-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>`,
  svg_name: "/paintings/mikatajima.png",
  hint: "string",
  colors: [
    "#0B111B",
    "#00275A",
    "#01285C",
    "#01113D",
    "#002759",
    "#01242F",
    "#516F6B",
  ],
  w: 300,
  h: 420,
  infolink: "",
};

export const level3: level_name = {
  title: "The Swan No. 17",
  artist: "Hilma Af Klint",
  start: "",
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
  infolink: "",
};

export const level4: level_name = {
  title: "The Mad Hatter",
  artist: "Tarrant Hightopp",
  start: "",
  solution: (
    <div className="w-[300px] h-[300px] bg-[#1e3a8a] relative flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-28 bg-[#000000] rounded-t-xl rounded-b-sm overflow-hidden">
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-[#facc15]"></div>
        </div>
        <div className="w-56 h-6 bg-black rounded-full -mt-2"></div>
      </div>
    </div>
  ),
  solution_str: `<div class="w-screen h-screen bg-blue-900 relative flex items-center justify-center">
  <div class="flex flex-col items-center">
    <div class="relative w-40 h-28 bg-black rounded-t-xl rounded-b-sm overflow-hidden">
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-[#facc15]"></div>
    </div>
    <div class="w-56 h-6 bg-black rounded-full -mt-2"></div>
  </div>
</div>`,
  svg_name: "/paintings/Mad_Hatter.png",
  hint: "string",
  colors: ["#000000", "#1e3a8a", "#facc15"],
  w: 300,
  h: 300,
  infolink: "",
};

export const level5: level_name = {
  title: "Composition",
  artist: "Piet Mondrian",
  start: "",
  solution: (
    <div className="w-[300] h-[300] bg-black grid grid-cols-[3fr_7fr] grid-rows-[3fr_7fr] border border-black gap-2">
      <div className="bg-[#b6262b]" />
      <div className="bg-[#dee1e8]" />
      <div className="bg-[#dee1e8]" />
      <div className="bg-black grid grid-cols-[6fr_3fr_0.5fr] grid-rows-[4fr_5fr_0.5fr] gap-2">
        <div className="bg-[#dee1e8] col-span-2 row-span-2" />
        <div className="bg-[#203385]" />
        <div className="bg-[#dee1e8] row-span-2" />
        <div className="bg-[#d9a948]" />
        <div className="bg-black" />
      </div>
    </div>
  ),
  solution_str: `<div class="w-[300px] h-[300px] bg-black grid grid-cols-[3fr_7fr] grid-rows-[3fr_7fr] border border-black gap-2">
    <div class="bg-[#b6262b]"></div>
    <div class="bg-[#dee1e8]"></div>
    <div class="bg-[#dee1e8]"></div>
    <div class="bg-black grid grid-cols-[6fr_3fr_0.5fr] grid-rows-[4fr_5fr_0.5fr] gap-2">
        <div class="bg-[#dee1e8] col-span-2 row-span-2"></div>
        <div class="bg-[#203385]"></div>
        <div class="bg-[#dee1e8] row-span-2"></div>
        <div class="bg-[#d9a948]"></div>
        <div class="bg-black"></div>
    </div>
</div>`,
  svg_name: "/paintings/mondrian.svg",
  hint: "string",
  colors: ["#dee1e8", "#b6262b", "#203385", "#d9a948"],
  w: 300,
  h: 300,
  infolink: "https://www.piet-mondrian.org/",
};

export const levels: level_name[] = [level1, level2, level3, level4, level5];
