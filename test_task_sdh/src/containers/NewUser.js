import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import 'typeface-roboto';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { users } from '../store/store';
import { setUsersThunk } from '../store/actions';
import { POST_URL } from '../constants/api_const';
import NewUserPresentation from '../components/NewUserPresentation';

class NewUser extends React.Component {
  state = {
    job: '',
    gender: '',
    last_name: '',
    biography: '',
    first_name: '',
    birth_date: '',
    success: false,
    is_active: true
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value.replace(
        /[^ {,.!?+}A-Za-zА-Яа-я]/gi,
        ''
      )
    });
  };

  handleInputDate = (date) => {
    this.setState({
      birth_date: date
    });
  };

  handleChangeGender = (event) => {
    this.setState({
      gender: event.target.value
    });
  };

  handleActiveChange = () => {
    this.setState({
      is_active: !this.state.is_active
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      success: false
    });
    const {
      job,
      gender,
      biography,
      is_active,
      last_name,
      first_name,
      birth_date
    } = this.state;

    let d = new Date(birth_date);
    const value = 'yyy-MM-dd';

    axios({
      method: 'POST',
      url: POST_URL,
      data: {
        job,
        gender,
        last_name,
        biography,
        first_name,
        is_active: !is_active,
        birth_date: format(new Date(d), value)
      },
      headers: { 'Content-Type': 'application/json' }
    })
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response))
      .then(() => this.props.setUsersThunk());

    this.setState({
      job: '',
      gender: '',
      last_name: '',
      biography: '',
      first_name: '',
      birth_date: '',
      success: true,
      is_active: true
    });
  };

  handleSetStatus = () => {
    this.setState({
      success: false
    });
  };

  render() {
    const {
      job,
      gender,
      success,
      biography,
      is_active,
      last_name,
      first_name,
      birth_date
    } = this.state;
    return (
      <div>
        <NewUserPresentation
          job={job}
          gender={gender}
          success={success}
          biography={biography}
          is_active={is_active}
          last_name={last_name}
          first_name={first_name}
          birth_date={birth_date}
          history={this.props.history}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          handleSetStatus={this.handleSetStatus}
          handleInputDate={this.handleInputDate}
          handleChangeGender={this.handleChangeGender}
          handleActiveChange={this.handleActiveChange}
        />
      </div>
    );
  }
}

const getStateFromProps = (state) => ({
  users: users(state)
});

const getDispatchFromProps = {
  setUsersThunk
};

NewUser.propTypes = {
  setUsersThunk: PropTypes.func.isRequired
};

export default connect(getStateFromProps, getDispatchFromProps)(NewUser);
