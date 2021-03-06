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

  const memberStyle = {
    backgroundColor: 'blue',
    fontSize: '16px',
    color: 'white',
  };

  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        <p className="member_status" style={join ? memberStyle : null}>
          {join ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </td>
      <td>
        <button type="button" className={join ? 'leave-button' : 'join-button'} onClick={handleClick}>
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
    join: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
