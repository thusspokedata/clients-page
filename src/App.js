// import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import RestaurantDetail from "./components/RestaurantDetails";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import AdminSignup from "./auth/AdminSignup";
import ProtectedRoute from "./components/ProtectedRoutes";

import Qr from "./pages/QR";
import AdminPage from "./pages/AdminPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import MainPage from "./pages/MainPage";
import Resto from "./pages/Restaurants";
// style
import "./assets/css/custom.min.css";

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
        <Route path="/restaurants" element={<Resto />} />
        <Route path="/restaurant-details" element={<RestaurantDetail />} />
        <Route path="*" element={<h1>404- Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
