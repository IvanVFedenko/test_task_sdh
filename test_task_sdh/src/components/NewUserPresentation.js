import React from 'react';
import 'typeface-roboto';
import '../styles/newUser.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField, Checkbox, Button, Input } from '@material-ui/core';

const NewUserPresentation = (props) => {
  const {
    job,
    history,
    success,
    is_active,
    last_name,
    biography,
    first_name,
    birth_date,
    handleInput,
    handleSubmit,
    handleSetStatus,
    handleInputDate,
    handleChangeGender,
    handleActiveChange
  } = props;
  return (
    <div>
      {success ? (
        <div>
          <div>
            <h1>The user was added!</h1>
          </div>
          <div>
            <Button onClick={() => history.goBack()}>
              Back to the user list
            </Button>
          </div>
          <div>
            <Button onClick={() => handleSetStatus()}>Add the new user</Button>
          </div>
        </div>
      ) : (
        <div className="new_user">
          <Button onClick={() => history.goBack()}>
            Return to the user list
          </Button>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                required={true}
                className="input"
                type="first_name"
                name="first_name"
                value={first_name}
                onChange={handleInput}
                placeholder="Add first name"
                inputProps={{ maxLength: 256 }}
              />
            </div>
            <div>
              <Input
                required={true}
                type="last_name"
                name="last_name"
                className="input"
                value={last_name}
                onChange={handleInput}
                placeholder="Add last name"
                inputProps={{ maxLength: 256 }}
              />
            </div>
            <div>
              <span className="datepickerTitle">Choose a date of birth:</span>
              <DatePicker
                required={true}
                className="datepicker"
                selected={birth_date}
                dateFormat="yyyy-MM-dd"
                onChange={handleInputDate}
              />
            </div>
            <div>
              <select
                id="select"
                required
                className="gender"
                onChange={handleChangeGender}
                // defaultValue="Choose users gender"
              >
                <option disabled>Choose users gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <Input
                type="job"
                name="job"
                value={job}
                required={true}
                className="input"
                placeholder="Add job"
                onChange={handleInput}
                inputProps={{ maxLength: 256 }}
              />
            </div>
            <div>
              <TextField
                rows={5}
                required={true}
                className="input"
                type="biography"
                name="biography"
                multiline={true}
                value={biography}
                onChange={handleInput}
                placeholder="Add biography"
                inputProps={{ maxLength: 1024 }}
              />
            </div>
            <div className="activity">
              <span className="datepickerTitle">
                Active (y/n)
                <Checkbox onChange={handleActiveChange} value={is_active} />
              </span>
            </div>
            <div>
              <Button type="submit" variant="text" color="default">
                Add user
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

NewUserPresentation.propTypes = {
  birth_date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  job: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired,
  is_active: PropTypes.bool.isRequired,
  last_name: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSetStatus: PropTypes.func.isRequired,
  handleInputDate: PropTypes.func.isRequired,
  handleChangeGender: PropTypes.func.isRequired,
  handleActiveChange: PropTypes.func.isRequired
};

export default NewUserPresentation;
