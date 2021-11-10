import fetchApiRockets from '../../components/rocketsApi';

const GET_ROCKETS = 'nasa_projects/rockets/GET_ROCKETS';
// const RESERVE_ROCKETS = 'nasa_projects/rockets/RESERVE_ROCKETS';
// const CANCEL_ROCKETS = 'nasa_projects/rockets//CANCEL_ROCKETS';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const theRockets = await fetchApiRockets();
  const mappedData = theRockets.map((rocket) => ({
    id: rocket.rocket_id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImages: rocket.flickr_images[0],
  }));

  dispatch(
    {
      type: GET_ROCKETS,
      payload: mappedData,
    },
  );
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
