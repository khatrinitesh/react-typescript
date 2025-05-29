/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Mainlayout = () => {


  return (
    <>
      <div className='appLayout'>
        <Header/>
        <div className='mainContent'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Mainlayout;
