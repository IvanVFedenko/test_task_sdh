import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './styles/App.css';
import User from './containers/User';
import NewUser from './containers/NewUser';
import EditUser from './containers/EditUser';
import UsersList from './containers/UsersList';
import SomeError from './components/SomeError';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect from="/" exact to="/users_List" />
        <Route
          path="/new_user"
          render={({ match, history }) => (
            <NewUser userId={match.params.userId} history={history} />
          )}
        />
        <Route
          path="/edit_user/:userId"
          render={({ match, history }) => (
            <EditUser userId={match.params.userId} history={history} />
          )}
        />
        <Route path="/users_List" exact component={UsersList} />
        <Route
          path="/users_List/:userId"
          render={({ match, history }) => (
            <User userId={match.params.userId} history={history} />
          )}
        />
        <Route component={SomeError} />
      </Switch>
    </div>
  );
};

export default App;
