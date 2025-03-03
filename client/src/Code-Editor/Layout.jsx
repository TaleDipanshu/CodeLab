import { CodeProvider } from "./CodeContext";
import Editor from "./Editor";
import Reference from "./Reference";
import Split from 'react-split';


function App() {
    return (
    <CodeProvider>
    <div className="h-screen">
      <Split
        className="flex h-full"
        sizes={[50, 50]}
        minSize={200}
        gutterSize={10} 
        direction="horizontal"
      >
        
        <div className="bg-gray-800 p-4 h-full">
          <Editor />
        </div>

       
        <div className="bg-gray-900 p-4 h-full">
          <Reference />
        </div>
      </Split>
            </div>
     </CodeProvider>
  );
}

export default App;
