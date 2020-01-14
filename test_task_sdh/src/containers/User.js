import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BASE_URL } from '../constants/api_const';

import { users } from '../store/store';
import ShownUser from '../components/ShownUser';
import { setUsersThunk } from '../store/actions';

const User = (props) => {
  const { userId, users, setUsersThunk, history } = props;
  const shownUser = users.find((user) => user.id === +userId);
  const handleDeleteOne = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(() => {
        console.log('removed');
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => setUsersThunk());
  };
  return (
    <div>
      <ShownUser
        history={history}
        shownUser={shownUser}
        handleDeleteOne={handleDeleteOne}
      />
    </div>
  );
};

const getStateFromProps = (state) => ({
  users: users(state)
});

const getDispatchFromProps = {
  setUsersThunk
};

User.propTypes = {
  userId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  setUsersThunk: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default connect(getStateFromProps, getDispatchFromProps)(User);
