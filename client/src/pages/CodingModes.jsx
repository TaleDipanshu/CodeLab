import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const CodingModes = () => {
  const navigate = useNavigate(); 

  const handleAccessModeClick = (mode) => {
    switch (mode) {
      case 'Design To Code':
        navigate('/design-to-code'); 
        break;
      case 'Make Me Functional':
        navigate('/make-me-functional');
        break;
      case 'JsBites':
        navigate('/jsbites'); 
        break;
      case 'Pro Challenges':
        navigate('/pro-challenges'); 
        break;
      default:
        navigate('/');
    }
  };

  const codingModes = [
    {
      title: 'Design To Code',
      description:
        'Get your hands dirty with our coding challenges without the hassle of searching for new designs everytime you want to code, and jump right into practice. It’s the best way to sharpen your coding abilities!',
      imgSrc: 'https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg',
      buttonLabel: 'Access Mode',
    },
    {
      title: 'Make Me Functional',
      description:
        'Want to get better at JavaScript? We’ve got you covered! Check our ready-to-go HTML and CSS templates, and add cool stuff with JavaScript. No need to start from scratch—just put in your code and see your projects in action!',
      imgSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonLabel: 'Access Mode',
    },
    {
      title: 'JsBites',
      description:
        'Sink your teeth into bite-sized JavaScript challenges! From algorithmic puzzles to real-world scenarios, sharpen your skills and level up your coding proficiency with JsBites.',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonLabel: 'Access Mode',
    },
    {
      title: 'Pro Challenges',
      description:
        'Unlock our most advanced challenges and gain access to premium designs meticulously crafted for desktop and mobile. Explore the details of each design with complete access to Figma files, where you will find everything that you need (images, colors, fonts, and more).',
      imgSrc: 'https://media.istockphoto.com/id/2162485112/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=2048x2048&w=is&k=20&c=kUkd-52FC166W3RyYJuiAVTYxqLR8WqFl3mPeAvx-UU=',
      buttonLabel: 'Access Mode',
    },
  ];

  return (
    <div className=" bg-[#0f0e17] py-10">
      <h1 className="text-white text-4xl font-bold text-center mb-10">Coding Modes</h1>
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {codingModes.map((mode, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={mode.imgSrc} alt={mode.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{mode.title}</h3>
              <p className="text-gray-600 mb-4">{mode.description}</p>
              <button
                onClick={() => handleAccessModeClick(mode.title)}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
              >
                {mode.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingModes;
