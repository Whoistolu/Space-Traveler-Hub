const GET_MISSIONS = 'Space-Traveler-HUb/misions/GET_MISSIONS';
const JOIN_MISSIONS = 'Space-Traveler-HUb/misions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'Space-Traveler-HUb/misions/LEAVE_MISSIONS';

const initialState = [];

export const getMissions = (payload) => (
  {
    type: GET_MISSIONS,
    payload,
  }
);

export const joinMissions = (payload) => (
  {
    type: JOIN_MISSIONS,
    payload,
  }
);

export const LeaveMissions = (payload) => (
  {
    type: LEAVE_MISSIONS,
    payload,
  }
);

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: {
      return [...state, ...action.payload];
    }
    case JOIN_MISSIONS:
      return ({ state: action.payload });
    case LEAVE_MISSIONS:
      return ({ state: action.payload });
    default:
      return state;
  }
};

export default missionReducer;
