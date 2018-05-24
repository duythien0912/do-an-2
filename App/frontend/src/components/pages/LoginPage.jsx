import React from "react";

import LoginForm from "../Form/LoginForm";
import TopNavigation from "../navigation/TopNavigation";

class LoginPage extends React.Component {
  submit = e => {
    this.props.history.push("/user");
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      if (token.split(" ")[1] === "user" || !token.split(" ")[1]) {
        this.props.history.push("/user");
      }
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div>
        <TopNavigation />
        <div
          style={{
            height: "10em",
            position: "relative"
          }}
        >
          <div
            style={{
              margin: 0,
              position: "absolute",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, 50%)"
            }}
          >
            <LoginForm submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
