import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";

const localStorage = require("local-storage");

class UserInfo extends Component {
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
         {this.state.data ? 
          <Table>
            <thead>
              <tr className="page__title title-black text-left">
                <th>User Name</th>
                <th>EmailAddress</th>
                <th>phoneNumber</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
                {this.state.data.map(data => (
                  <tr>
                    <td>{data.firstName} {data.lastName}</td>
                    <td>{data.emailAddress}</td>
                    <td>{data.phoneNumber}</td>
                    <td>
                    {data.address ?
                      <p className="mb-0px">{data.address},{data.landMark},{data.country},{data.city}</p>
                    : null}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>: <p>User not found</p>}
        </Col>
      </Row>
    );
  }
}

export default UserInfo;
