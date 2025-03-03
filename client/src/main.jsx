import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Navbar from './components/NavBar'
import CodingModes from './pages/CodingModes'
import CodingDesign from './pages/CodingDesign'
import MakeMeFunctional from './pages/MakeMeFunctional';
import JsBites from './pages/JsBites';
import ProChallenges from './pages/ProChallenges';
import DesignToCode from './pages/CodingDesign'
import CodeEditor from './Code-Editor/Layout'
import ProSubscription from './components/Gopro'
import Roadmap from './components/Roadmap'
import Leaderboard from './components/LeaderBoard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/codingMode" element={<CodingModes />} />
        <Route path="/codingDesign" element={<CodingDesign />} />
        <Route path="/pro" element={<ProSubscription />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/leaderBoard" element={<Leaderboard />} />
        <Route path="/make-me-functional" element={<MakeMeFunctional />} />
        <Route path="/jsbites" element={<JsBites />} />
        <Route path="/pro-challenges" element={<ProChallenges />} />
        <Route path="/design-to-code" element={<DesignToCode />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
