import React from "react";
// import SignUp from "../components/Signup";
// import Login from "../components/Login";
import CreateCompany from "../components/CreateCompany";
import AddEmployee from "../components/AddEmployee";

function SignupLogin() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6">
          <CreateCompany />
        </div>
        <div className="col-12 col-sm-6">
          <AddEmployee />
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignupLogin;