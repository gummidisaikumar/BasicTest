import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem } from "reactstrap";
import windowSize from "react-window-size";

const PublicNavigation = props => (
  <Nav className="custom-menu-item--position">
    <LinkContainer exact to="/">
      <NavItem className="" onClick={() => props.onToggle()}>
        <p className="nav-item--list mb-0px">
          Register
        </p>
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/dashboard">
      <NavItem className="" onClick={() => props.onToggle()}>
        <p className="nav-item--list mb-0px">
          Dashboard
        </p>
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/userList">
      <NavItem className="" onClick={() => props.onToggle()}>
        <p className="nav-item--list mb-0px">
          UserList
        </p>
      </NavItem>
    </LinkContainer>
  </Nav>
);

PublicNavigation.propTypes = {
  onToggle: PropTypes.func.isRequired,
  windowWidth: PropTypes.number
};

PublicNavigation.defaultProps = {
  windowWidth: 0
};
export default withRouter(windowSize(PublicNavigation));
