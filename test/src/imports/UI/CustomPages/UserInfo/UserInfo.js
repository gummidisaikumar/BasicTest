import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}> textInComponent </Col>
      </Row>
    );
  }
}

export default UserInfo;
