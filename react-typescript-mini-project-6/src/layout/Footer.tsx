import React from 'react';

const Footer = () => {
    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black text-white py-[20px]'>
      <div className="container mx-auto px-[1rem]">
        <p>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
