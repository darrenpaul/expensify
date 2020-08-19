import React from "react";
import { NavLink } from "react-router-dom";
export default () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" exact={true} to="/">
      Home Page
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create Page
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help Page
    </NavLink>
  </header>
);
