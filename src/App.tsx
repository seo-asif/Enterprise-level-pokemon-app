import React from "react";

import "./App.css";
import Background from "./components/Background";
import "./scss/index.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./sections/Navbar";

import Footer from "./sections/Footer";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <Background />

      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/list" element={<MyList />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Navigate to="/pokemon/1" />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
