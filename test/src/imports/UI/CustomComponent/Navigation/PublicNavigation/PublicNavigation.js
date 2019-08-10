import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "reactstrap";

const PublicNavigation = props => (
  <Nav className="custom-menu-item--position">
    <NavItem className="" onClick={() => props.onToggle()}>
      <NavLink href="/">
        <p className="nav-item--list mb-0px">Register</p>
      </NavLink>
    </NavItem>
    <NavItem className="" onClick={() => props.onToggle()}>
      <NavLink href="/dashboard">
        <p className="nav-item--list mb-0px">Dashboard</p>
      </NavLink>
    </NavItem>
    <NavItem className="" onClick={() => props.onToggle()}>
      <NavLink href="/userlist">
        <p className="nav-item--list mb-0px">UserList</p>
      </NavLink>
    </NavItem>
  </Nav>
);

PublicNavigation.propTypes = {
  onToggle: PropTypes.func.isRequired,
  windowWidth: PropTypes.number
};

PublicNavigation.defaultProps = {
  windowWidth: 0
};
export default PublicNavigation;
