import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute redirectTo="/login">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404- Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
