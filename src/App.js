import "./App.css";
import Header from "./Header/Header";
import About from "./About/About";
import History from "./History/History";
import Associates from "./Associates/Associates";
import "./Assets/partials/fonts.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/associates" element={<Associates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
