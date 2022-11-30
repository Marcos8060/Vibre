import React from "react";
import Navbar from "./Components/Navbar";
import BodyOne from "./Pages/BodyOne";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BodyOne />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
