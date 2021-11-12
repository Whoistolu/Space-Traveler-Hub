import axios from 'axios';

// Actions
const JOIN_MISSIONS = 'Space-Traveler-HUb/misions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'Space-Traveler-HUb/misions/LEAVE_MISSIONS';
const GET_MISSIONS = 'Space-Traveler-HUb/misions/GET_MISSIONS';

const initialState = [];

// Action Creators
const getMissions = (payload) => (
  {
    type: GET_MISSIONS,
    payload,
  }
);

const joinMissions = (id) => (
  {
    type: JOIN_MISSIONS,
    id,
  }
);

const LeaveMissions = (payload) => (
  {
    type: LEAVE_MISSIONS,
    payload,
  }
);

// Reducer
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];

    case JOIN_MISSIONS:
      return state.map((mission) => (mission.id !== action.id ? mission
        : { ...mission, join: !mission.join }));

    default:
      return state;
  }
};

// Thunks
export const loadMisionsThunk = () => (
  async (dispatch) => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  }
);

export {
  getMissions,
  missionReducer,
  joinMissions,
  LeaveMissions,
};
