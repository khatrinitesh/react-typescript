import React from 'react';
import type { HeadTitleProps } from '../interface/types';

const HeadTitle:React.FC<HeadTitleProps> = ({children,headStyle}) => {

  return (
    <>
       <h1 className={`${headStyle} headTitle`}>{children}</h1>
    </>
  );
}

export default HeadTitle;