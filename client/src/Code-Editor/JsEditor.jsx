// JsEditor.jsx
import React, { useContext, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from '@codemirror/autocomplete';
import { linter } from '@codemirror/lint';
import { oneDark } from '@codemirror/theme-one-dark';
import { CodeContext } from './CodeContext'; // Adjust path as necessary

function JsEditor() {
  const { jsCode, setJsCode } = useContext(CodeContext); // Use context here

  const saveCode = (code) => {
    localStorage.setItem('jsCode', code);
  };

  useEffect(() => {
    const savedJsCode = localStorage.getItem('jsCode');
    if (savedJsCode) {
      setJsCode(savedJsCode);
    }
  }, [setJsCode]);

  const handleCodeChange = (value) => {
    setJsCode(value);
    saveCode(value);
  };

  return (
    <CodeMirror
      value={jsCode}
      height="560px"
      theme={oneDark}
      extensions={[
        javascript(),
        autocompletion(), // Enable autocomplete
        linter(), // Enable linting (error messages)
      ]}
      onChange={(value) => {
        handleCodeChange(value);
      }}
    />
  );
}

export default JsEditor;
