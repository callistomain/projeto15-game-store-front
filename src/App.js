import GlobalStyled from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <GlobalStyled/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}