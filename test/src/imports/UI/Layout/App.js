import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "../CustomPages/PersonalDetails/PersonalDetails";
import Navigation from "../CustomComponent/Navigation/Navigation";
import Dashboard from "../CustomPages/Dashboard/Dashboard";
import UserInfo from "../CustomPages/UserInfo/UserInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, state } = this;
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation {...props} {...state} />
            <Route exact path="/" component={PersonalDetails} {...props} />
            <Route path="/userList" component={UserInfo} {...props} />

            <Route path="/dashboard" component={Dashboard} {...props} />
          </div>
        </Router>
      </div>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
