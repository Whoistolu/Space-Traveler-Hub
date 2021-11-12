import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const state = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      <div>
        <h2>My Missions</h2>
        <table className="profile_table">
          <ul>
            {state.map((mission) => (
              <li key={mission.id}>
                <p>{mission.name}</p>
              </li>
            ))}
          </ul>
        </table>
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
