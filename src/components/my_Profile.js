import React from 'react';
import { useSelector } from 'react-redux';
// import Missions from './missions';
import './profile.css';

const MyProfile = () => {
  const state = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="myProfile">
      <div className="display_missions">
        <h2>My Missions</h2>
        <ul
          className="display_mission"
          style={{ display: 'block' }}
        >
          {state.map((mission) => (
            <li key={mission.id}>
              {mission.join && <p className="display_list_m">{mission.name}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <div className="display_rocket">
          {rockets.filter((item) => item.reserved).map((data) => (
            <li key={data.id} className="display_list_r">
              {data.rocketName}
            </li>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
