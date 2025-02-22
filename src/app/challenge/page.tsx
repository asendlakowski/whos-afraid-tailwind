"use client";
import React, { useState } from "react";
import RecreateSection from "./RecreateSection";
import MonacoEditor from "../monacotest/monacoEditor";

const Challenge = () => {
  const [code, setCode] = useState<string>("Hello World");

  return (
    <div className="w-screen h-screen bg-[#5D8AA1]">
      <div className="grid grid-cols-[2fr_3fr_3fr] w-screen h-screen gap-5 pt-10 px-5 pb-5">
        <RecreateSection
          paintingWidth={300}
          paintingHeight={420}
          title="Who's Afraid of Red, Yellow, and Blue I"
          artist="Barnett Newman"
          painting={
            <div className="w-[300px] h-[420] bg-[#cd0000] flex flex-row justify-between">
              <div className="w-3 h-full bg-[#02007f]"></div>
              <div className="w-1 h-full bg-[#fec800]"></div>
            </div>
          }
        />
        <div className="bg-white w-full h-full opacity-75 rounded-xl">
          <MonacoEditor code={code} setCode={setCode} />
        </div>
        <div className="bg-white w-full h-full opacity-75 rounded-xl">
          <iframe
            title="output"
            className="bg-white w-full aspect-video"
            srcDoc={`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                  body { margin: 0; padding: 0; }
                </style>
              </head>
              <body>
                ${code}
              </body>
            </html>
  `} // Inject HTML into the iframe
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
