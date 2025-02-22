"use client";

import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { configureMonacoTailwindcss } from "monaco-tailwindcss";
import * as monaco from "monaco-editor";
import tailwindConfig from "./../../../tailwind.config";

interface MonacoEditorProps {
  code: string;
  setCode: (value: string) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const { code, setCode } = props;

//   const tailwindcssData = {
//     theme: tailwindConfig.theme, // Extract theme data, can be extended for more
//   };

//   useEffect(() => {
//     // Initialize Monaco configuration for Tailwind CSS
//     configureMonacoTailwindcss(monaco);
//     monaco.languages.css.cssDefaults.setOptions({
//       data: {
//         dataProviders: {
//           tailwindcss: tailwindcssData, // Use the imported tailwindcssData here
//         },
//       },
//     });
//   }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <Editor
        height="300px"
        width="600px"
        language="html"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default MonacoEditor;
