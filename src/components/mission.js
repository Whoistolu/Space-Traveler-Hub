import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMissions } from '../redux/missions/missionReducer';

const Mission = ({ mission }) => {
  const {
    id, name, description, join,
  } = mission;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMissions(id));
  };

  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        <p>
          {join ? 'Active Member' : 'Join Mission'}
        </p>
      </td>
      <td>
        <button type="button" onClick={handleClick}>
          {join ? 'Leave mission' : 'Join Mission'}
        </button>
      </td>
    </tr>

  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    join: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
