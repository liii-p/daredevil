import "./App.css";
import Header from "./Header/Header";
import About from "./About/About";
import History from "./History/History";
import Associates from "./Associates/Associates";
import "./Assets/partials/_fonts.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/daredevil" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/associates" element={<Associates />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
