import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { users } from '../store/store';
import { NavLink } from 'react-router-dom';
import { setUsersThunk } from '../store/actions';

import 'typeface-roboto';
import '../styles/userList.css';
import Button from '@material-ui/core/Button';
import { BASE_URL } from '../constants/api_const';
import UsersListPresentation from '../components/UsersListPresentation';

const UsersList = (props) => {
  const { setUsersThunk, users } = props;
  useEffect(() => {
    setUsersThunk();
  }, []);

  const handleDelete = (id) => {
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
    <div className="wrapper">
      <div className="newUserButton">
        <Button>
          <NavLink to="/new_user" className="newUserLink">
            Add the new user
          </NavLink>
        </Button>
      </div>
      <div>
        {users.map((user) => (
          <UsersListPresentation
            user={user}
            handleDelete={handleDelete}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

const getStateFromProps = (state) => ({
  users: users(state)
});

const getDispatchFromProps = {
  setUsersThunk
};

UsersList.propTypes = {
  setUsersThunk: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default connect(getStateFromProps, getDispatchFromProps)(UsersList);
