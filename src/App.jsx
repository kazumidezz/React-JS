import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Characters from "./pages/Characters";
import Teyvat from "./pages/Teyvat";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthGuard from "./components/AuthGuard";
import { AuthProvider } from "./context/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import UserManagement from './pages/UserManagement';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-50 min-h-screen">
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />

            {/* Protected Routes */}
            <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
            <Route path="/characters" element={<AuthGuard><Characters /></AuthGuard>} />
            <Route path="/teyvat" element={<AuthGuard><Teyvat /></AuthGuard>} />
            <Route path="/users" element={<AuthGuard><Users /></AuthGuard>} />
            <Route path="/admin" element={<AuthGuard><AdminDashboard /></AuthGuard>} />
            <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />


          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
