import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ShownUser = (props) => {
  const { shownUser, handleDeleteOne, history } = props;
  return (
    <div className="userList">
      <Button onClick={() => history.goBack()}>Return to the users list</Button>
      <div>
        <div className="userData">
          <div className="userData_name">Name: </div>
          <div className="userData_string">{shownUser.first_name}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Surname: </div>
          <div className="userData_string"> {shownUser.last_name}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Birthday:</div>
          <div className="userData_string"> {shownUser.birth_date}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Gender: </div>
          <div className="userData_string"> {shownUser.gender}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Job: </div>
          <div className="userData_string"> {shownUser.job}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Biography: </div>
          <div className="userData_string"> {shownUser.biography}</div>
        </div>
        <div className="userData">
          <div className="userData_name">Active: </div>
          <div className="userData_string">
            {shownUser.is_active ? 'Active' : 'Not active'}
          </div>
        </div>
      </div>
      <div className="buttons">
        <div>
          <NavLink to="/users_List" className="userLinks">
            <Button
              type="button"
              onClick={() => {
                handleDeleteOne(shownUser.id);
              }}
              className="destroyItem"
            >
              DELETE
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink to={`/edit_user/${shownUser.id}`} className="userLinks">
            <Button>EDIT</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ShownUser.propTypes = {
  history: PropTypes.object.isRequired,
  shownUser: PropTypes.object.isRequired,
  handleDeleteOne: PropTypes.func.isRequired
};

export default ShownUser;
