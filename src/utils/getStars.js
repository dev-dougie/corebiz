import React from 'react';

export const getStars = (value, MdStar, MdStarBorder) => {
  return (
    <>
      {[...Array(value)].map(() => {
        //Including star icon in array
        return <MdStar key={Math.random(1000)} />;
      })}
      {[...Array(5 - value)].map(() => {
          //Filling in star icon
        return <MdStarBorder key={Math.random(1000)} />;
      })}
    </>
  );
};
