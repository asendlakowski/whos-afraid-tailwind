"use client";

import React from "react";
import MonacoEditor from "./monacoEditor";
import { useState } from "react";

const MonacoTest = () => {
  const [code, setCode] = useState<string>("Hello World");

  return (
    <div className="flex flex-col items-center p-4">
      <h1>Monaco Editor</h1>
      <MonacoEditor code={code} setCode={setCode} />
      <h2 className="text-lg font-bold mt-4">Current Code:</h2>
      <pre className="bg-gray-800 text-white p-2 w-full max-w-2xl rounded-md">
        {code}
      </pre>
      <iframe
        title="output"
        className="bg-white w-full aspect-video"
        srcDoc={code} // Inject HTML into the iframe
        style={{ width: "100%", height: "300px", border: "1px solid white" }}
      />
      <div
        className="p-4 mt-2 border border-gray-300 rounded-md"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
};

export default MonacoTest;
