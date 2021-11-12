import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const state = useSelector((state) => state.missionReducer);
  return (
    <div>
      <div>
        <h2>My Missions</h2>
        <h3>My Missions</h3>
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
    </div>
  );
};

export default MyProfile;
