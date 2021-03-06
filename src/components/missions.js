import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './mission';
import { loadMisionsThunk } from '../redux/missions/missionReducer';
import './mission.css';

function Missions() {
  const state = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.length === 0) {
      dispatch(loadMisionsThunk());
    }
  }, []);
  return (
    <div className="table_div">
      <table className="mission_table">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
          {state.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
