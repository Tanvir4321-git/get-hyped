import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import About from './Component/About';
import Slider from './Component/Slider';
import Content from './Component/Content';

const App = () => {
  return (
    <div className='bg-[#faf4ec]'>
      <Navbar></Navbar>
      <main className='bg-[#faf4ec]'>
        <HeroSection></HeroSection>
        <About></About>
        <Slider></Slider>
        <Content></Content>
      </main>
    </div>
  );
};

export default App;