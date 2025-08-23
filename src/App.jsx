import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
