import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

class PublicNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pathName: '',
    }
  }
componentWillMount(){
  const {location} = this.props.history;
  console.log(location);
  this.setState({
    pathName: location.pathname
  });

}
  render() {
    return (
      <Nav className="custom-menu-item--position">
        <NavItem className="" onClick={() => this.props.onToggle()}>
          <NavLink href="/">
            <p className={`nav-item--list mb-0px ${this.state.pathName == '/' ? 'fw-800' : 'title-white opacity-05'}`}>Register</p>
          </NavLink>
        </NavItem>
        <NavItem className="" onClick={() => this.props.onToggle()}>
          <NavLink href="/dashboard">
            <p className={`nav-item--list mb-0px ${this.state.pathName == '/dashboard' ? 'fw-800' : 'title-white opacity-05'}`}>Dashboard</p>
          </NavLink>
        </NavItem>
        <NavItem className="" onClick={() => this.props.onToggle()}>
          <NavLink href="/userlist">
            <p className={`nav-item--list mb-0px ${this.state.pathName == '/userlist' ? 'fw-800' : 'title-white opacity-05'}`}>UserList</p>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

PublicNavigation.propTypes = {
  onToggle: PropTypes.func.isRequired
};

PublicNavigation.defaultProps = {
  history: PropTypes.object.isRequired
};
export default withRouter(PublicNavigation);
