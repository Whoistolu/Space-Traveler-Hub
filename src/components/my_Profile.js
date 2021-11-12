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
              {mission.join && <p className="display_list">{mission.name}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="display_rockets">
        <h2>My Rockets</h2>
        <div className="display_rocket">
          {rockets.filter((item) => item.reserved).map((data) => (
            <div key={data.id} className="display_list">
              {data.rocketName}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
