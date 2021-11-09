const GET_ROCKETS = 'nasa_projects/rockets/GET_ROCKETS';
const initialState = [];

export const rockets = (payload) => (
  {
    type: GET_ROCKETS,
    payload,
  }
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return ({ state: action.payload });
    default:
      return state;
  }
};

export default rocketReducer;
