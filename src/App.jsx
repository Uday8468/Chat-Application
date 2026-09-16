import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/authContext";
const App = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain ">
      <BrowserRouter>
        <Toaster />

        <Routes>
          <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login"/>} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/"/>} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
