import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      <div>
        <h2>My Missions</h2>
      </div>
      <div>
        <h2>My Rockets</h2>
        <div>
          {rockets.filter((item) => item.reserved).map((data) => (
            <div key={data.id}>
              {data.rocketName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
