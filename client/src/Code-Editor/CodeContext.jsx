import React, { createContext, useState } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <CodeContext.Provider value={{ htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode }}>
      {children}
    </CodeContext.Provider>
  );
};
