import { level_name } from "./level_type";

export const level1: level_name = {
  title: "Who's Afraid of Red, Yellow, and Blue I",
  artist: "Barnett Newman",
  start: `<div class="canvas w-screen h-screen bg-[#cd0000]">\n\t<div></div>\n\t<div></div>\n</div>`,
  solution: (
    <div className="soln_canvas w-[300px] h-[420px] bg-[#cd0000] flex flex-row justify-between">
      <div className="w-3 h-full bg-[#02007f]"></div>
      <div className="w-1 h-full bg-[#fec800]"></div>
    </div>
  ),
  solution_str: `<div class="canvas w-screen h-screen bg-[#cd0000] flex flex-row justify-between">
  <div class="w-3 h-full bg-[#02007f]"></div>
  <div class="w-1 h-full bg-[#fec800]"></div>
</div>`,
  svg_name: "/paintings/whos_afraid_of_ryb.svg",
  description: `In tailwind, aligning elements using flexboxes is easy! writing 'flex' will create a flexbox and you can 
  add 'flex-row' or 'flex-col' to specify the flex direction. 
  To align your elements along the primary axis, use justify-___ with keywords like 'start', 'end', 'center', between, 'around', and 'evenly'. 
  See if you can figure out what kind of alignment you need to solve this problem.`,
  funfact:
    'This painting is the first painting of a trio created by this painter. The third painting, "Who\'s Afraid of Red, Yellow and Blue III" was famously vandalized with a box cutter by someone with a grudge against abstract art.',
  hint: "In our solution, the blue strip has width w-3 and the yellow strip is w-1.",
  colors: ["#CD0000", "#02007F", "#FEC800"],
  w: 300,
  h: 420,
  infolink: "https://www.moma.org/artists/4285-barnett-newman",
};

export const level2: level_name = {
  title: "Composition",
  artist: "Piet Mondrian",
  start: '<div class="canvas w-screen h-screen bg-white grid">\n</div>',
  solution: (
    <div className="soln_canvas w-[300px] h-[300px] bg-black grid grid-cols-[3fr_7fr] grid-rows-[3fr_7fr] border border-black gap-2">
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
  solution_str: `<div class="canvas w-screen h-screen bg-black grid grid-cols-[3fr_7fr] grid-rows-[3fr_7fr] border border-black gap-2">
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
  description:
    'Grid is a powerful layout system that allows you to define the rows and columns of a grid. Use grid, grid-cols, and grid-rows to format squares and rectangles in a way that recreates "Composition". \
    In some cases, you may want a single element to span multiple rows or columns in your grid. To achieve this with tailwind you can use col-span and row-span.',
  funfact:
    'Piet Mondrian\'s "Composition" works are a hallmark of his Neoplasticism style, where he used only primary colors, black, white, and grey arranged in a strict grid of vertical and horizontal lines. He believed that these simplified forms could reveal the universal order and balance of the cosmos, a revolutionary idea that continues to influence modern art and design',
  hint: "In our solution, we use row-span-2 to make elements take up a span of two rows instead of just one.",

  colors: ["#dee1e8", "#b6262b", "#203385", "#d9a948"],
  w: 300,
  h: 300,
  infolink: "https://www.piet-mondrian.org/",
};

export const level3: level_name = {
  title: "The Mad Hatter",
  artist: "Tarrant Hightopp",
  start: '<div class="canvas w-screen h-screen bg-white">\n</div>',
  solution: (
    <div className="soln_canvas w-[300px] h-[300px] bg-[#1e3a8a] relative flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-28 bg-[#000000] rounded-t-xl rounded-b-sm overflow-hidden">
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-[#facc15]"></div>
        </div>
        <div className="w-56 h-6 bg-black rounded-full -mt-2"></div>
      </div>
    </div>
  ),
  solution_str: `<div class="canvas w-screen h-screen bg-blue-900 relative flex items-center justify-center">
  <div class="flex flex-col items-center">
    <div class="relative w-40 h-28 bg-black rounded-t-xl rounded-b-sm overflow-hidden">
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-[#facc15]"></div>
    </div>
    <div class="w-56 h-6 bg-black rounded-full -mt-2"></div>
  </div>
</div>`,
  svg_name: "/paintings/Mad_Hatter.svg",
  description:
    "The 'relative' and 'absolute' classes are helpful when positioning elements relative to other elements or the page. 'relative' positions an element based on its normal flow, while 'absolute' positions it relative to the nearest positioned ancestor or the viewport.",
  funfact:
    'Tarrant Hightopp, otherwise known as the Mad Hatter, is famously known for his whimsical nature and absurd riddles. During the 2010 movie rendition of "Alice in Wonderland", his role was acted out by none other than Johnny Depp',
  hint: "Our solution uses transform and translate classes to position the yellow element.",
  colors: ["#000000", "#1e3a8a", "#facc15"],
  w: 300,
  h: 300,
  infolink: "https://www.alice-in-wonderland.net/",
};

export const level4: level_name = {
  title: "The Swan No. 17",
  artist: "Hilma Af Klint",
  start: '<div class="canvas w-screen h-screen bg-white">\n</div>',
  solution: (
    <div className="soln_canvas w-[300px] h-[300px] bg-[#A95139] relative flex items-center justify-center">
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
  solution_str: `<div class="canvas w-screen h-screen bg-[#A95139] relative flex items-center justify-center">
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
  description:
    "The 'rounded' utility in Tailwind applies border-radius for rounded corners, where 'rounded-l' rounds only the left side, and 'rounded-r' rounds only the right side, allowing for precise corner styling. ",
  funfact:
    '"The Swan No. 17" is number 17 out of 24 oil paitings created by Hilma af Klint in her "The Swan" series. These paintings explored her passion for spirituality, mysticism, and unseen worlds. Interestingly, Klint believed her art was divinely inspired and kept her abstract works hidden during her lifetime, only revealing them when she felt the world was ready to understand their deeper, spiritual meaning.',
  hint: "Use flexbox centering to position the main blue circle, layer absolute divs for overlapping elements",
  colors: ["#A95139", "#DCD7CC", "#262427", "#D28C74", "#D5B651", "#5684C1"],
  w: 300,
  h: 300,
  infolink: "https://hilmaafklint.se/",
};

export const level5: level_name = {
  title: "Unnamed",
  artist: "Mika Tajima",
  start: `<div class="canvas w-screen h-screen bg-white">\n</div>`,
  solution: (
    <div className="soln_canvas w-[300px] h-[420px] bg-gradient-to-b from-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>
  ),
  solution_str: `<div class="canvas w-screen h-screen bg-gradient-to-b from-[#0B111B] via-[#00275A] via-[#01285C] via-[#01113D] via-[#002759] via-[#01242F] to-[#516F6B] flex items-center justify-center"></div>`,
  svg_name: "/paintings/mikatajima.png",
  description:
    "Gradient is a unique tailwind feature that allows you to transition between two or more colors. bg-gradient-to-b is a class that creates a background gradient that moves from top to bottom.",
  funfact:
    'The artist, Mika Tajima, sometimes title their works in a deliberately open or minimal way (hence "Unnamed"), allowing the audience to enjoy the painting for what it is without being swayed by the title.',
  hint: "Use from, via, and to to define the flow of colors in a gradient: from sets the starting color, via adds a middle transition, and to sets the ending color.",
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
  infolink: "https://mikatajima.com/",
};

export const levels: level_name[] = [level1, level2, level3, level4, level5];
