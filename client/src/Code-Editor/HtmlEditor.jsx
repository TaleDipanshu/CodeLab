// HtmlEditor.jsx
import React, { useContext, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { html } from '@codemirror/lang-html';
import { autocompletion } from '@codemirror/autocomplete';
import { lintGutter } from '@codemirror/lint';
import { CodeContext } from './CodeContext'; // Adjust path as necessary

// Custom auto-completion function
const customCompletion = (context) => {
  const tags = ['html', 'head', 'body', 'title', 'h1', 'p', 'div'];

  return tags
    .filter(tag => tag.startsWith(context.matchBefore('')))
    .map(tag => ({
      label: tag,
      type: 'tag',
      info: `${tag} tag`,
      apply: () => {
        // Insert full tag with cursor between tags
        return { from: context.from, to: context.to, text: `<${tag}></${tag}>` };
      }
    }));
};

function HtmlEditor() {
  const { htmlCode, setHtmlCode } = useContext(CodeContext); // Use context here

  const saveCode = (code) => {
    localStorage.setItem('htmlCode', code);
  };

  useEffect(() => {
    const savedHtmlCode = localStorage.getItem('htmlCode');
    if (savedHtmlCode) {
      setHtmlCode(savedHtmlCode);
    }
  }, [setHtmlCode]);

  const handleCodeChange = (value) => {
    setHtmlCode(value);
    saveCode(value);
  };

  return (
    <CodeMirror
      value={htmlCode}
      height="560px"
      theme={oneDark}
      extensions={[
        html(),
        autocompletion({ override: [customCompletion] }),
        lintGutter()
      ]}
      onChange={(value) => {
        handleCodeChange(value);
      }}
    />
  );
}

export default HtmlEditor;
