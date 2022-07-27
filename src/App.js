import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminSignup from "./components/AdminSignup";
// import CreateCompany from "./components/CreateCompany";
import ProtectedRoute from "./components/ProtectedRoutes";
// import AddEmployee from "./components/AddEmployee";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
// import SignupLogin from "./pages/SignupLogin";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoute redirectTo="/login">
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/create-company"
          element={
            <ProtectedRoute redirectTo="/login">
              <Company />
            </ProtectedRoute>
          }
        />
        <Route path="/admin-signup" element={<AdminSignup />} />

        {/* <Route path="/signup-login" element={<SignupLogin />} /> */}

        {/* <Route path="/add-employee" element={<AddEmployee />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        
        <Route path="*" element={<h1>404- Not Found </h1>} />
        
      </Routes>
    </div>
  );
}

export default App;
