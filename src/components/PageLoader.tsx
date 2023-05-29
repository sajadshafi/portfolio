import React from 'react';

const PageLoader = ({ classes }:{ classes:string; }) => {
  return (
    <div className={`${classes} flex items-center justify-center bg-backgroundColor1`}>
      <div className="loading-bar bg-backgroundColor1 shadow-shadowWhite3">
        Loading
      </div>
    </div>
  );
};

export default PageLoader;
