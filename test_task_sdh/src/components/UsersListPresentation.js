import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../styles/user.css';
import '../styles/userList.css';

const UsersListPresentation = (props) => {
  const { user, handleDelete } = props;
  return (
    <div className="userList">
      <Link to={`/users_List/${user.id}`} className="link">
        <div className="userData">
          <div className="userData_name">Name: </div>
          <div className="userData_string">{user.first_name}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Surname: </div>
          <div className="userData_string"> {user.last_name}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Birthday:</div>
          <div className="userData_string"> {user.birth_date}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Gender: </div>
          <div className="userData_string"> {user.gender}</div>
        </div>
      </Link>
      <Button
        className="destroy"
        type="button"
        onClick={() => {
          handleDelete(user.id);
        }}
        disabled={!user.id}
      >
        DELETE
      </Button>
    </div>
  );
};

UsersListPresentation.propTypes = {
  user: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default UsersListPresentation;
