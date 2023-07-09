import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavigation from "./components/Navigation/SideNavigation";
import PolicyPage from "./components/Policies/PolicyPage";
import Disclaimer from "./components/Policies/Disclaimer";
import Terms from "./components/Policies/Term";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideNavigation />} />
        <Route path="/privacyPolicy" element={<PolicyPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
