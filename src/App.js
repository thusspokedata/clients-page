import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminSignup from "./components/AdminSignup";
import ProtectedRoute from "./components/ProtectedRoutes";
// import AddEmployee from "./components/AddEmployee";
import { Routes, Route } from "react-router-dom";
import Qr from "./pages/QR";
import AdminPage from "./pages/AdminPage";
import ConfirmationPage from "./pages/ConfirmationPage";
// import SignupLogin from "./pages/SignupLogin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/qr"
          element={
            <ProtectedRoute redirectTo="/login">
              <Qr />
            </ProtectedRoute>
          }
        />
        <Route path="/confirm/:confirmCode" element={<ConfirmationPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404- Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
