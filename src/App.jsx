import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import AOSINIT from "../components/configAos/AOS";

function App() {
  AOSINIT();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
