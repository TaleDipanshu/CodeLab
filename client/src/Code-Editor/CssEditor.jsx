import React, { useContext, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { autocompletion } from '@codemirror/autocomplete';
import { linter } from '@codemirror/lint';
import { oneDark } from '@codemirror/theme-one-dark';
import { CodeContext } from './CodeContext'; // Import the context

function CssEditor() {
  const { cssCode, setCssCode } = useContext(CodeContext); // Access cssCode from context

  const saveCode = (code, key) => {
    localStorage.setItem(key, code);
  };

  useEffect(() => {
    const savedCssCode = localStorage.getItem('cssCode');
    if (savedCssCode) {
      setCssCode(savedCssCode);
    }
  }, [setCssCode]);

  const handleCodeChange = (value) => {
    setCssCode(value);
    saveCode(value, 'cssCode');
  };

  return (
    <CodeMirror
      value={cssCode}
      height="560px"
      theme={oneDark}
      extensions={[
        css(),
        autocompletion(),
        linter(),
      ]}
      onChange={(value) => handleCodeChange(value)}
    />
  );
}

export default CssEditor;
