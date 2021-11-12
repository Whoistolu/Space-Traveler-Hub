const JOIN_MISSIONS = 'Space-Traveler-HUb/misions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'Space-Traveler-HUb/misions/LEAVE_MISSIONS';
const GET_MISSIONS = 'Space-Traveler-HUb/misions/GET_MISSIONS';

const initialState = [];

const getMissions = (payload) => (
  {
    type: GET_MISSIONS,
    payload,
  }
);

const joinMissions = (payload) => (
  {
    type: JOIN_MISSIONS,
    payload,
  }
);

const LeaveMissions = (payload) => (
  {
    type: LEAVE_MISSIONS,
    payload,
  }
);

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

export {
  getMissions,
  missionReducer,
  joinMissions,
  LeaveMissions,
};
