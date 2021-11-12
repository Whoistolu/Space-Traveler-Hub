import fetchApiRockets from '../../components/rocketsApi';

const GET_ROCKETS = 'nasa_projects/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'nasa_projects/rockets/RESERVE_ROCKETS';
const CANCEL_ROCKETS = 'nasa_projects/rockets//CANCEL_ROCKETS';
const initialState = [];

let loading = false;
export const getRockets = () => async (dispatch) => {
  const theRockets = await fetchApiRockets();
  const mappedData = theRockets.map((rocket) => ({
    id: rocket.rocket_id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImages: rocket.flickr_images[0],
  }));
  if (loading) return;
  await dispatch(
    {
      type: GET_ROCKETS,
      payload: mappedData,
    },
  );
  loading = true;
};

export const reserveRockets = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const cancelRockets = (id) => ({
  type: CANCEL_ROCKETS,
  id,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_ROCKETS: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
