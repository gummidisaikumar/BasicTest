import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
const localStorage = require("local-storage");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: localStorage.get("data")
    };
  }

  render() {
    return (
      <Row className="pt-112px">
        <Col xs={10} sm={10} md={10} lg={10} xl={10} className="m-auto">
          <Row>
            {this.state.data.map(data => (
              <Col xs={6} sm={6} md={4} lg={3} xl={3}>
                <Row className="mt-8px mb-8px">
                  <Col className="border padding-1rem bg-white-smoke">
                  <div className="common-flex pt-4px pb-8px justify-content-center">
                    <i class="fa fa-users" />
                  </div>
                    <p className="page__title mb-0px title-black">
                      {data.firstName} {data.lastName}
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
