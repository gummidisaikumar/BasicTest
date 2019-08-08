import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import PersonalInfo from "../../CustomComponent/PersonalInfo/PersonalInfo";
import Register from "../../CustomComponent/Register/Register";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      selectedIndex: 0,
      isCVEnabled: false
    };
    this.renderSelectedComponent = this.renderSelectedComponent.bind(this);
    this.handleRegisterTabClick = this.handleRegisterTabClick.bind(this);
    this.handlePersonalInfoTabClick = this.handlePersonalInfoTabClick.bind(
      this
    );
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRegisterTabClick() {
    this.setState({ selectedIndex: 0 });
  }
  handleNextClick(data) {
    this.setState({
      isCVEnabled: true,
      selectedIndex: 1,
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
    });
  }

  handlePersonalInfoTabClick() {
    if (this.state.isCVEnabled) {
      this.setState({ selectedIndex: 1 });
    }
  }
  handleSubmit(data) {
    console.log(data);
    const { history } = this.props;
    history.push("/dashboard");
  }
  renderSelectedComponent() {
    if (this.state.selectedIndex === 0) {
      return <Register onSave={this.handleNextClick} />;
    }
    if (this.state.selectedIndex === 1) {
      return <PersonalInfo onSave={this.handleSubmit} data={this.state}/>;
    }
    return null;
  }
  render() {
    return (
      <Row className="mt-48px">
        <Col
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          className="personal-tabs-container margin-auto common-plr"
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="personal-tabs-bg common-flex margin-auto"
            >
              <p
                className={`personal-tabs mb-0px cursor-pointer ${
                  this.state.selectedIndex === 0 ? "title-white" : "opacity-05"
                }`}
                id="tst-overview"
                onClick={() => this.handleRegisterTabClick()}
              >
                1.Register
              </p>
              <p
                className={`personal-tabs mb-0px cursor-pointer ${
                  this.state.selectedIndex === 1 ? "title-white" : "opacity-05"
                }`}
                id="tst-overview"
                onClick={() => this.handlePersonalInfoTabClick()}
              >
                2.PersonalInfo
              </p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="common-plr">
              <Row>
                <Col
                  xs={8}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  className="common-plr pt-32px pb-32px"
                >
                  {this.renderSelectedComponent()}
                </Col>
                <Col
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  className="bg-white-smoke"
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
PersonalDetails.propTypes = {
  history: PropTypes.object.isRequired
};

export default PersonalDetails;
