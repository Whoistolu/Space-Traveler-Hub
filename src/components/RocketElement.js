import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import SingleRocket from './SingleRockets';

const RocketElement = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <>
      {
        rockets.map((rocket) => (
          <SingleRocket key={rocket.id} data={rocket} />
        ))
      }
    </>
  );
};

export default RocketElement;
