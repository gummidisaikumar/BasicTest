import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class Dashboard extends Component {
   constructor(props){
       super(props);
       this.submit = this.submit.bind(this)
   } ;
   submit(){
    //this.props.history.push("/login");
   }
  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}> Dashboard </Col>
      </Row>
    );
  }
}

export default Dashboard;
