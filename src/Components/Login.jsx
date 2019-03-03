import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }

  handleSubmit = () => {
    this.props.submit(this.state);
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: "1000px",
          margin: "20px auto"
        }}
      >
        <div style={{ display: "flex", margin: "1%" }}>
          <label style={{ display: "block", width: "40%", textAlign: "right" }}>
            Name :{" "}
          </label>
          <input
            type="text"
            style={{ marginLeft: "1%" }}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ display: "flex", margin: "1%" }}>
          <label style={{ display: "block", width: "40%", textAlign: "right" }}>
            Email :{" "}
          </label>
          <input type="text" style={{ marginLeft: "1%" }} />
        </div>
        <div style={{ display: "flex", margin: "1%" }}>
          <label style={{ display: "block", width: "40%", textAlign: "right" }}>
            Password :{" "}
          </label>
          <input type="text" style={{ marginLeft: "1%" }} />
        </div>
        <Link
          className="btn btn-primary"
          onClick={this.handleSubmit}
          to="/movies"
        >
          Submit
        </Link>
        <hr />
      </div>
    );
  }
}

export default Login;
