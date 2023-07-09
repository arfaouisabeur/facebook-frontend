import React from 'react';
import LeftSection from './LeftSection';
import CenterSection from './CenterSection';
import RightSection from './RightSection';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default Main;
