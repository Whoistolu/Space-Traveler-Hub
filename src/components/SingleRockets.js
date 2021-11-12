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
  const name = reserved ? 'white' : 'blue';
  return (
    <>
      <div className="all">
        <img className="img-container" src={flickrImages} alt="rocket name" />
        <div className="description">
          <h2 className="rocket-name">
            {
                rocketName
              }
          </h2>
          <span className="reserved">{rocketBadge}</span>
          <span className="rocket-description">
            {
                description
              }
          </span>
          <button className={name} onClick={() => reservedRocketStatus(id)} type="button">{status}</button>
        </div>
      </div>
    </>
  );
};

export default SingleRocket;
