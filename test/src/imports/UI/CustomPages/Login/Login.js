import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class Login extends Component {
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
        <Col xs={12} sm={12} md={12} lg={12} xl={12}> textInComponent </Col>
        <Button onClick={this.submit()}>Submit</Button>
      </Row>
    );
  }
}

export default Login;
