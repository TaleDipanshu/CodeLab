import React from 'react';
import MakeMeFunctional from './pages/MakeMeFunctional'; 
import JsBites from './pages/JsBites';
import ProChallenges from './pages/ProChallenges';
import HeroSection from './components/HeroSection';
import FAQs from './components/Faq';
import ChallengeSection from './components/ChallengeSection';
import './App.css'
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="bg-[#0f0e17] min-h-screen text-white">
      <HeroSection />
      <ChallengeSection />
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default App;
