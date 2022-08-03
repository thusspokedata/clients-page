import "./App.css";
import Header from "./components/Header";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import AdminSignup from "./auth/AdminSignup";
import ProtectedRoute from "./components/ProtectedRoutes";
import ProtectedAdminRoute from "./components/ProtectedAdminRoutes";
// import AddEmployee from "./components/AddEmployee";
import { Routes, Route } from "react-router-dom";
import Qr from "./pages/QR";
import AdminPage from "./pages/AdminPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import MainPage from "./pages/MainPage";
// import SignupLogin from "./pages/SignupLogin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/qr"
          element={
            <ProtectedRoute redirectTo="/">
              <Qr />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-page"
          element={
            <ProtectedRoute redirectTo="/">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="/confirm/:confirmCode" element={<ConfirmationPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404- Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
