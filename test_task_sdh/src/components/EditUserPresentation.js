import React from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { TextField, Checkbox, Button, Input } from '@material-ui/core';

const EditUserPresentation = (props) => {
  const {
    job,
    gender,
    history,
    success,
    date_data,
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
              Back to the user details
            </Button>
          </div>
          <div>
            <Button onClick={() => handleSetStatus()}>Add the new user</Button>
          </div>
        </div>
      ) : (
        <div className="new_user">
          <Button onClick={() => history.goBack()}>
            Return to the users data
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
                placeholder=" Add first name"
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
                selected={birth_date}
                className="datepicker"
                dateFormat="yyyy-MM-dd"
                onChange={handleInputDate}
              />
              <span className="datepickerCurrent">
                Current date: {date_data}
              </span>
            </div>
            <div>
              <select
                id="select"
                required={true}
                className="gender"
                value={gender}
                onChange={handleChangeGender}
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
                onChange={handleInput}
                placeholder="Add job"
                inputProps={{ maxLength: 256 }}
              />
            </div>
            <div>
              <TextField
                rows={5}
                required={true}
                multiline={true}
                type="biography"
                name="biography"
                className="input"
                value={biography}
                onChange={handleInput}
                placeholder="Add biography"
                inputProps={{ maxLength: 1024 }}
              />
            </div>
            <div className="activity">
              <span className="datepickerTitle">
                Active (y/n)
                <Checkbox
                  onChange={handleActiveChange}
                  checked={is_active ? true : false}
                />
              </span>
            </div>
            <div>
              <Button type="submit" variant="text" color="default">
                Update user
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

EditUserPresentation.propTypes = {
  birth_date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  job: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  gender: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  is_active: PropTypes.bool.isRequired,
  date_data: PropTypes.string.isRequired,
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
export default EditUserPresentation;
