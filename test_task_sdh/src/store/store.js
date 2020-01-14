import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { usersReduser } from './reducers';

const rootReducer = combineReducers({
  userList: usersReduser
});

export const users = ({ userList }) => userList.users;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
