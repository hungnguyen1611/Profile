import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

import AOSINIT from "../components/configAos/AOS";
import Login from "./pages/Auth/Login/Login";

function App() {
  AOSINIT();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
