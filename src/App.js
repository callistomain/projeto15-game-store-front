import GlobalStyled from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import { UserContext } from "./UserContext";
import { useState } from "react";

export default function App() {
  const userObj = JSON.parse(localStorage.getItem("userGameStore"));
  const [user, setUser] = useState(userObj);

  return (
    <Router>
      <GlobalStyled/>
      <UserContext.Provider value={user}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={
            user ? <div>Home</div> : <Navigate replace to="/login" />
          }/>

          {/* LOGIN */}
          <Route path="/login" element={<LoginPage setUser={setUser}/>}/>

          {/* SIGNUP */}
          <Route path="/signup" element={<SignupPage/>}/>

        </Routes>
      </UserContext.Provider>
    </Router>
  );
}