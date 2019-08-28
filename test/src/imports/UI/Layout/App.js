import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "../CustomPages/PersonalDetails/PersonalDetails";
import Navigation from "../CustomComponent/Navigation/Navigation";
import Dashboard from "../CustomPages/Dashboard/Dashboard";
import UserInfo from "../CustomPages/UserInfo/UserInfo";
import addressUpdate from "../../Redux/Actions/addressActions";
import personUpdate from "../../Redux/Actions/personActions";
import getUser from "../../Redux/Actions/userActions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, state } = this;
    console.log(props);
    console.log("state", props.users);
    return (
      <div className="App">
        <p>Redux</p>
        <p>PersonName: {props.person.name}</p>
        <button onClick={props.updatePerson}>Update Name</button>

        <p>Address: {props.address.address}</p>
        <button onClick={props.updateAddress}>UpdateAdress</button>
        <br />
        <p>{props.person.isLogin ? <p>true</p>: <p>False</p>}</p>
        <button onClick={props.getUser}>FetchUser</button>
        {props.users.length === 0 ? (
          <p>user not found</p>
        ) : (
          props.users.map(data => (
            <div>
              <p>{data.id}</p>
              <p>{data.email}</p>
              <img src={data.avatar} />
            </div>
          ))
        )}
        {/* <Router>
          <div>
            <Navigation {...props} {...state} />
            <Route exact path="/" component={PersonalDetails} {...props} />
            <Route path="/userList" component={UserInfo} {...props} />

            <Route path="/dashboard" component={Dashboard} {...props} />
          </div>
        </Router> */}
      </div>
    );
  }
}

App.defaultProps = {};

App.propTypes = {
  history: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    person: state.person,
    address: state.address,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAddress: () => {
      dispatch(addressUpdate);
    },
    updatePerson: () => {
      dispatch(personUpdate);
    },
    getUser: () => {
      dispatch(getUser);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
