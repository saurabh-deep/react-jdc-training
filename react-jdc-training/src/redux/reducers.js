import { combineReducers } from 'redux';
import * as ActionTypes from './actions';

// Initial states
const initialStateProfile = {
  isAuthenticated: false
};

// Individual reducers
const profile = (state = initialStateProfile, action) => {
  switch (action.type) {
    case ActionTypes.ProfileActions.RECEIVE_PROFILE:
      return retrieveProfileFromToken(state, action);
    case ActionTypes.ProfileActions.LOGOUT:
      return initialStateProfile;
    default:
      return state;
  }
};

// Mutation functions
function retrieveProfileFromToken(state, action) {
  return Object.assign({}, state, action.profile, {
    isAuthenticated: true
  });
}

// Combined reducers
const rootReducer = combineReducers({
  profile
});

export default rootReducer;