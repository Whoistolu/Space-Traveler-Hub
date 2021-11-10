import React from 'react';
import { useSelector } from 'react-redux';

const SingleRocket = (prop) => {
  const { rockets } = useSelector((state) => state);
  const { data } = prop;
  const { description, flickrImages, rocketName } = data;
  console.log(rockets);
  return (
    <>
      <span>
        {
                description
              }
      </span>
      <img src={flickrImages} alt="rocket name" />
      <h2>
        {
                rocketName
              }
      </h2>
    </>
  );
};

export default SingleRocket;
