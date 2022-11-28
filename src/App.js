import GlobalStyled from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import { UserContext } from "./UserContext";
import { useState } from "react";
import CartPage from "./pages/Cart/CartPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

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
            user ? <HomePage setUser={setUser}/> : <Navigate replace to="/login" />
          }/>

          {/* LOGIN */}
          <Route path="/login" element={<LoginPage setUser={setUser}/>}/>

          {/* SIGNUP */}
          <Route path="/signup" element={<SignupPage/>}/>

          {/* SIGNUP */}
          <Route path="/cart" element={<CartPage setUser={setUser}/>}/>

          <Route path="/checkout" element={<CheckoutPage setUser={setUser}/>}/>

        </Routes>
      </UserContext.Provider>
    </Router>
  );
}