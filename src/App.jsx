import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/logInPage";
import SignInPage from "./pages/signInPage";
import FilterPage from "./pages/FilterPage";
import CuisinesCard from "./components/common/filters/cuisinesCard";
import DiningFilterCard from "./components/common/filters/diningFilterCard";
import DiningOut from "./components/diningOut/dining";
import NightFilterCard from "./components/common/filters/nightFilterCard";
import NightLife from "./components/nightLife.jsx/night";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/signUp" element={<SignInPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/diningfilter" element={<DiningFilterCard />} />
          <Route path="/dining" element={<DiningOut />} />
          <Route path="/nightfilter" element={<NightFilterCard />} />
          <Route path="/night" element={<NightLife />} />
          <Route path="/cuisine" element={<CuisinesCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
