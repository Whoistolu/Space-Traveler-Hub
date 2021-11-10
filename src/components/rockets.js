import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const { rockets } = useSelector((state) => state);
  // console.log(rockets);
  return (
    <div>
      <p>Rockets</p>
    </div>
  );
};

export default Rockets;
