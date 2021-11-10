/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Mission from './mission';
import { getMissions } from '../redux/missions/missionReducer';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  console.log(missions);

  const allMissions = async () => {
    const missions = await axios
      .get('https://api.spacexdata.com/v3/missions?limit=10')
      .then((response) => {
        const data = response.data.map((item) => ({
          name: item.mission_name,
          id: item.mission_id,
          description: item.description,
          join: false,
        }));
        return data;
      });
    dispatch(getMissions(missions));
  };

  useEffect(() => {
    if (missions.length === 0) {
      allMissions();
    }
  }, []);

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>description</th>
        <th>Status</th>
        <th>{ }</th>
      </tr>
      {missions.map((mission) => (
        <Mission key={mission.id} mission={mission} />
      ))}
    </table>
  );
};

export default Missions;
