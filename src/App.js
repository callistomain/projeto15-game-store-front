import GlobalStyled from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignupPage from "./pages/Signup/SignupPage";

export default function App() {
  return (
    <Router>
      <GlobalStyled/>
      <Routes>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </Router>
  );
}