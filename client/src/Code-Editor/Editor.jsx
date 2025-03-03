import React, { useState } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import JsEditor from './JsEditor';

function CodeMirrorEditor() {
  const [mode, setMode] = useState("html");
  const [jsCode, setJsCode] = useState('// Edit your JavaScript here');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleJsCodeChange = (code) => {
    setJsCode(code);
  };

  console.log(jsCode);

  return (
    <div>
      <div className='flex gap-5 bg-slate-600'>
        <button className='bg-red-400 m-2 rounded' onClick={() => handleModeChange("html")}>HTML</button>
        <button className='bg-blue-400 m-2 rounded' onClick={() => handleModeChange("css")}>CSS</button>
        <button className='bg-yellow-400 m-2 rounded' onClick={() => handleModeChange("javascript")}>JavaScript</button>
      </div>
      <div>
        {mode === "html" && <HtmlEditor />}
        {mode === "css" && <CssEditor />}
        {mode === "javascript" && <JsEditor value={jsCode} onChange={handleJsCodeChange} />}
      </div>
    </div>
  );
}

export default CodeMirrorEditor;
