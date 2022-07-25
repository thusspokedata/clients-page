import React from "react";
import SignUp from "../components/Signup";
import Login from "../components/Login";

function SignupLogin() {
  return (
    <div className="App container">
      <div className="row col-8">
        <div className="col-3">
          <SignUp />
        </div>
        <div className="col-3">
        <Login />
        </div>
      
      </div>
    </div>
  )
}

export default SignupLogin;