"use client";

import React from "react";
import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
// import tailwindConfig from "../../../tailwind.config";
// import { configureMonacoTailwindcss } from "monaco-tailwindcss";

interface MonacoEditorProps {
  code: string;
  setCode: (value: string) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const { code, setCode } = props;

  const options: editor.IStandaloneEditorConstructionOptions = {
    minimap: { enabled: false },
    scrollbar: { vertical: "hidden" },
    overviewRulerLanes: 0,
  };


  return (
    <div className="flex flex-col items-center h-[30%] p-4">
      <Editor
        language="html"
        theme="vs-light"
        value={code}
        options={options}
        onChange={(value) => setCode(value || "")}
        // onMount={(editorInstance) => {
        //   // Trigger the format document action when the editor is mounted.
        //   editorInstance.getAction("editor.action.formatDocument")?.run();
        // }}
      />
    </div>
  );
};

export default MonacoEditor;
