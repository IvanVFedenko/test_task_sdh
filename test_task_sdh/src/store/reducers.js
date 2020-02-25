import { SET_USERS } from '../constants/action_types';

const initialState = {
  users: []
};

export const usersReduser = (state = initialState, action) => {
  const actions = {
    [SET_USERS]: () => ({
      ...state,
      users: action.value
    })
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
