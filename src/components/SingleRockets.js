import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelRockets, reserveRockets } from '../redux/rockets/rockets';

const SingleRocket = (prop) => {
  const dispatch = useDispatch();
  const { data } = prop;
  const {
    description, flickrImages, rocketName, reserved, id,
  } = data;
  const status = reserved ? 'Cancel Reservation' : 'Reserve Rocket';
  const rocketBadge = reserved ? 'Reserved' : '';
  const reservedRocketStatus = (id) => {
    if (reserved) {
      dispatch(cancelRockets(id));
    } else {
      dispatch(reserveRockets(id));
    }
  };
  return (
    <>
      <span>
        {
                description
              }
      </span>
      <div className="img-container"><img src={flickrImages} alt="rocket name" /></div>
      <h2>
        {
                rocketName
              }
      </h2>
      <button onClick={() => reservedRocketStatus(id)} type="button">{status}</button>
      <span>{rocketBadge}</span>
    </>
  );
};

export default SingleRocket;
