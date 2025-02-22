"use client";

import React from "react";
import Editor from "@monaco-editor/react";
// import tailwindConfig from "../../../tailwind.config";
// import { configureMonacoTailwindcss } from "monaco-tailwindcss";

interface MonacoEditorProps {
  code: string;
  setCode: (value: string) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const { code, setCode } = props;

  // const tailwindcssData = {
  //   theme: tailwindConfig.theme, // Extract theme data, can be extended for more
  // };

  // useEffect(() => {
  //   // Initialize Monaco configuration for Tailwind CSS
  //   configureMonacoTailwindcss(monaco, { tailwindConfig });
  //   // monaco.languages.css.cssDefaults.setOptions({
  //   //   data: {
  //   //     dataProviders: {
  //   //       tailwindcssData, // Use the imported tailwindcssData here
  //   //     },
  //   //   },
  //   // });
  // }, []);

  return (
    <div className="flex flex-col items-center h-[95%] p-4">
      <Editor
        language="html"
        theme="vs-light"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default MonacoEditor;
