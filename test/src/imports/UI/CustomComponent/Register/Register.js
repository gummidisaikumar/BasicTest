import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import FormValidator from "../../../modules/FormValidator";
import { isAlphaNumeric } from "../../../modules/customValidator";
import isInputInError from "../../../modules/isInputInError";

class Register extends Component {
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
        field: "password",
        constraints: [
          {
            method: "isEmpty",
            validWhen: false,
            message: "password is required."
          },
          {
            method: isAlphaNumeric,
            validWhen: true,
            message: "That is not a valid password."
          }
        ],
        touched: false
      }
    ]);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: ""
    };
    this.isValidate = true;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (this.props.password) {
      this.validator.touched("password");
    }
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
    } else {
      alert("hi");
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
                    <p className="error-msg">{validation.firstName.message}</p>
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
                    <p className="error-msg">{validation.lastName.message}</p>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={8} xl={8}>
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
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={8} xl={8}>
                <FormGroup>
                  <Label className="">password</Label>
                  <div
                    className={isInputInError(validation.password.isInvalid)}
                  >
                    <Input
                      placeholder="password"
                      type="password"
                      name="password"
                      valid={false}
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.password}
                    />
                    <p className="error-msg">{validation.password.message}</p>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={3}>
                <FormGroup>
                  <Button
                    onClick={this.handleSubmit}
                    disabled={!this.validator.canSubmit(this.state)}
                    className="btn-block"
                  >
                    Next
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

export default Register;
