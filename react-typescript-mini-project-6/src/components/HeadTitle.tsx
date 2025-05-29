import React from 'react';

const HeadTitle:React.FC<HeadTitleProps> = ({children,headTitleStyle}) => {
  return (
    <>
      <h2 className={`${headTitleStyle} headTitleStyle`}>{children}</h2>
    </>
  );
}

export default HeadTitle;
