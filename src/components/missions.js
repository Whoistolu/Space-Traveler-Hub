/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable consistent-return */
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import Mission from './mission';
import { getMissions } from '../redux/missions/missionReducer';

function Missions() {
  const state = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  console.log(state, 'initial');

  const allMissions = async () => {
    const req = await axios
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
    dispatch(getMissions(req));
  };
  const data = allMissions();
  console.log(data);
  return (
    <h2>
      Hello world
    </h2>
  );
  //   useEffect(() => {
  //     if (state.length > 0) {
  //       allMissions();
  //     }
  //   }, []);

//   return (
//     <table>
//       <tbody>
//         <tr>
//           <th>Mission</th>
//           <th>description</th>
//           <th>Status</th>
//           <th />
//         </tr>
//         {state.map((mission) => (
//           <Mission key={mission.id} mission={mission} />
//         ))}
//       </tbody>
//     </table>
//   );
}

export default Missions;
