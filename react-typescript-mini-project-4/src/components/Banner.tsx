import React from 'react';
import type { BannerProps } from '../interface';
import Btn from './Btn';

const Banner: React.FC<BannerProps> = ({ headTitle, description }) => {
  return (
    <div className="banner-container">
      <h1 className="banner-title">{headTitle}</h1>
      <p className="banner-description">{description}</p>
      <div className="banner-buttons">
        <Btn label="Sign Up" variant="white" onClick={() => alert("Sign Up")} />
        <Btn label="See Pricing" variant="primary" onClick={() => alert("See Pricing")} />
      </div>
    </div>
  );
};

export default Banner;
