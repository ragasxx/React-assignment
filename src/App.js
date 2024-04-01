import React from "react";
import SideNav from "./components/SideNav";
import Home from "./Pages/Home";
import Organisation from "./Pages/Organisation";
import Assets from "./Pages/Assets";
import Trade from "./Pages/Trade";
import History from "./Pages/History";
import Wallet from "./Pages/Wallet";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <SideNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/history" element={<History />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </SideNav>
    </Router>
  );
};

export default App;
