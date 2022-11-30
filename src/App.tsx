import React from "react";
import Navbar from "./Components/Navbar";
import BodyOne from "./Pages/BodyOne";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BodyOne />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
