import React from "react";
import PropTypes from "prop-types";
import { Collapse, Navbar, NavbarToggler } from "reactstrap";
import windowSize from "react-window-size";
import PublicNavigation from "./PublicNavigation/PublicNavigation";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="custom-menu">
          <NavbarToggler id="tst-navbar-toggle" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <PublicNavigation onToggle={this.toggle} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.defaultProps = {};

Navigation.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default windowSize(Navigation);
