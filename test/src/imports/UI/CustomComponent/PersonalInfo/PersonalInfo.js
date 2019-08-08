import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import isInputInError from "../../../modules/isInputInError";
import { isAlphaNumeric } from "../../../modules/customValidator";
import FormValidator from "../../../modules/FormValidator";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator([
      {
        field: "firstName",
        constraints: [
          {
            method: "isEmpty",
            validWhen: false,
            message: "Please enter First Name"
          },
          {
            method: "isLength",
            validWhen: true,
            message: "Name should be  max 15 characters",
            args: [{ max: 15 }]
          },
          {
            method: isAlphaNumeric,
            validWhen: true,
            message:
              "Name should be only characters, numeric & special characters are not allowed"
          }
        ],
        touched: false
      },
      {
        field: "lastName",
        constraints: [
          {
            method: "isEmpty",
            validWhen: false,
            message: "Please enter Last Name"
          },
          {
            method: "isLength",
            validWhen: true,
            message: "Name should be  max 15 characters",
            args: [{ max: 15 }]
          },
          {
            method: isAlphaNumeric,
            validWhen: true,
            message:
              "Name should be only characters, numeric & special characters are not allowed"
          }
        ],
        touched: false
      },
      {
        field: "emailAddress",
        constraints: [
          {
            method: "isEmpty",
            validWhen: false,
            message: "Email is required."
          },
          {
            method: "isEmail",
            validWhen: true,
            message: "That is not a valid email."
          }
        ],
        touched: false
      },
      {
        field: 'phoneNumber',
        constraints: [
          {
            method: 'isEmpty',
            validWhen: false,
            message: 'Phone number is required.',
          },
          {
            method: 'isMobilePhone',
            validWhen: true,
            message: 'That is not a valid mobile number.',
            args: ['any'],
          },
        ],
        touched: false,
      },
      {
        field: 'gender',
        constraints: [
          {
            method: 'isEmpty',
            validWhen: false,
            message: 'Please select Gender',
          },
        ],
        touched: false,
      },
    ]);
    this.state = {
      firstName: this.props.data ? this.props.data.firstName : "",
      lastName: this.props.data ? this.props.data.lastName : "",
      emailAddress: this.props.data ? this.props.data.emailAddress : "",
      phoneNumber: "",
      gender: "",
      address: "",
      landMark: "",
      country: "",
      city: ""
    };
    this.isValidate = true;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.methodChanged = this.methodChanged.bind(this);
    this.onGenderSelect = this.onGenderSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.firstName) {
      this.validator.touched("firstName");
    }
    if (this.props.lastName) {
      this.validator.touched("lastName");
    }

    if (this.props.emailAddress) {
      this.validator.touched("emailAddress");
    }
    if (this.props.phoneNumber) {
      this.validator.touched("phoneNumber");
    }
    if (this.props.gender) {
        this.validator.touched("gender");
      }
  }

  methodChanged(event) {
    this.validator.touched(event.target.name);
    this.setState({ gender: event.target.value });
  }

  onGenderSelect(value) {
    return this.state.gender === value;
  }
  handleInputChange(event) {
    event.preventDefault();
    this.validator.touched(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    const validation = this.validator.validate(this.state);
    this.setState({ validation });

    if (this.validator.canSubmit(this.state) && validation.isValid) {
      this.props.onSave(this.state);
    } 
  }

  render() {
    const validation = this.isValidate
    ? this.validator.validate(this.state)
    : this.state.validation;
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Form>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <p className="br-bottom">Personal Info</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <FormGroup>
                  <Label className="">First Name</Label>
                  <div
                    className={isInputInError(validation.firstName.isInvalid)}
                  >
                    <Input
                      placeholder="first Name"
                      type="text"
                      name="firstName"
                      valid={false}
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.firstName}
                    />
                    <p className="error-msg">
                      {validation.firstName.message}
                    </p>
                  </div>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <FormGroup>
                  <Label className="">Last Name</Label>
                  <div
                    className={isInputInError(validation.lastName.isInvalid)}
                  >
                    <Input
                      placeholder="last Name"
                      type="text"
                      name="lastName"
                      valid={false}
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.lastName}
                    />
                    <p className="error-msg">
                      {validation.lastName.message}
                    </p>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <FormGroup>
                  <Label className="">Email Address</Label>
                  <div
                    className={isInputInError(
                      validation.emailAddress.isInvalid
                    )}
                  >
                    <Input
                      placeholder="Email"
                      type="email"
                      name="emailAddress"
                      valid={false}
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.emailAddress}
                    />
                    <p className="error-msg">
                      {validation.emailAddress.message}
                    </p>
                  </div>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <FormGroup>
                  <Label className="">Phone Number</Label>
                  <div
                    className={isInputInError(validation.phoneNumber.isInvalid)}
                  >
                    <Input
                      placeholder="Phone Number"
                      type="text"
                      name="phoneNumber"
                      valid={false}
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.phoneNumber}
                    />
                    <p className="error-msg">
                      {validation.phoneNumber.message}
                    </p>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <p className="br-bottom">Gender</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={8} xl={8} className="common-plr">
                <Row>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label className="common-flex radio-button__container">
                      Male
                      <input
                        type="radio"
                        className="radio-button__checked"
                        name="gender"
                        value="Male"
                        checked={this.onGenderSelect("Male")}
                        onChange={this.methodChanged}
                      />
                      <span className="radio-button__mark" />
                    </Label>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label className="common-flex radio-button__container">
                      Female
                      <input
                        type="radio"
                        className="radio-button__checked"
                        name="gender"
                        value="Female"
                        checked={this.onGenderSelect("Female")}
                        onChange={this.methodChanged}
                      />
                      <span className="radio-button__mark" />
                    </Label>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label className="common-flex radio-button__container">
                      Other
                      <input
                        type="radio"
                        className="radio-button__checked"
                        name="gender"
                        value="Other"
                        checked={this.onGenderSelect("Other")}
                        onChange={this.methodChanged}
                      />
                      <span className="radio-button__mark" />
                    </Label>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <p className="br-bottom">Address Details</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={8} xl={8} className="common-plr">
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <FormGroup>
                      <Label className="">Address</Label>
                      <div
                        
                      >
                        <Input
                          placeholder="Address"
                          type="text"
                          name="address"
                          valid={false}
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.address}
                        />
                       
                      </div>
                    </FormGroup>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <FormGroup>
                      <Label className="">landMark</Label>
                      <div
                      >
                        <Input
                          placeholder="landMark"
                          type="text"
                          name="landMark"
                          valid={false}
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.landMark}
                        />
                       
                      </div>
                    </FormGroup>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <FormGroup>
                      <Label className="">Country</Label>
                      <div
                      >
                        <Input
                          placeholder="Country"
                          type="text"
                          name="country"
                          valid={false}
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.country}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <FormGroup>
                      <Label className="">City</Label>
                      <div
                      >
                        <Input
                          placeholder="City"
                          type="text"
                          name="city"
                          valid={false}
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.city}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={3}>
                <FormGroup>
                  <Button onClick={this.handleSubmit} className="btn-block"
                  disabled={!this.validator.canSubmit(this.state)}>
                    Submit
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}
PersonalInfo.propTypes = {
  data: PropTypes.object
};

PersonalInfo.defaultProps = {};

export default PersonalInfo;
