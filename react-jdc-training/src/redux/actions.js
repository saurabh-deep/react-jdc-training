// Action Types
export const ProfileActions = {
  RECEIVE_PROFILE: 'RECEIVE_PROFILE',
  LOGOUT: 'LOGOUT'
};

// Action thunks
export function retrieveProfileFromToken(accessToken) {
  return (dispatch, store) => {
    dispatch({
      type: ProfileActions.RECEIVE_PROFILE,
      profile: {
        firstName: 'TODO: firstName',
        lastName: 'TODO: lastName',
        email: 'TODO: email'
      }
    });
  };
}

export function logout() {
  return {
    type: ProfileActions.LOGOUT
  };
}