import React from 'react';
import { NavLink } from 'react-router-dom';

const SomeError = () => (
  <div>
    <h1 style={{ fontSize: 100, opacity: 0.8 }}>404: The page not found...</h1>
    <NavLink to="/users_List">Click to return</NavLink>
  </div>
);

export default SomeError;
