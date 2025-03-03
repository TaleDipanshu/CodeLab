import React, { useContext, useEffect, useState } from 'react';
import { CodeContext } from './CodeContext';
import MovableResizablePhoto from './UiComponent'; 

function Reference() {
  const { htmlCode, cssCode, jsCode } = useContext(CodeContext);
  const [iframeSrcDoc, setIframeSrcDoc] = useState('');
  const [showPhoto, setShowPhoto] = useState(false);
  useEffect(() => {
    const srcDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
      </html>
    `;
    setIframeSrcDoc(srcDoc);
  }, [htmlCode, cssCode, jsCode]);

  const handleRun = () => {
    const srcDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
      </html>
    `;
    setIframeSrcDoc(srcDoc);
  };

  return (
    <div className="flex flex-col h-full text-white bg-slate-400">
      <div className="flex justify-between p-2 bg-gray-800">
        <button
          onClick={handleRun}
          className="bg-green-600 hover:bg-green-700 h-10 w-20 rounded-md"
        >
          RUN⏯️
        </button>
        <button
          onClick={() => setShowPhoto(!showPhoto)}
          className="bg-blue-600 hover:bg-blue-700 h-10 w-20 ml-1 rounded-md"
        >
          {showPhoto ? 'Hide UI' : 'Show UI'}
        </button>
        <h1 className="text-white bg-gray-600 text-center w-full rounded p-2 ml-2">
          OUTPUT
        </h1>
      </div>
      <div className="flex-1 bg-gray-800 relative">
        <iframe
          srcDoc={iframeSrcDoc}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Output Window"
        />
        <MovableResizablePhoto
          imageUrl="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg"
          isVisible={showPhoto}
        />
      </div>
    </div>
  );
}

export default Reference;
