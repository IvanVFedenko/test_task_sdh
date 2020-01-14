import * as a_t from '../constants/action_types';
import * as g from '../api/get_users';

export const setUsers = (value) => ({ type: a_t.SET_USERS, value });

export const setUsersThunk = () => async (dispatch) => {
  const users = await g.getFromServer();
  dispatch(setUsers(users));
};
