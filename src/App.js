import "./App.css";
import NaviBar from "./components/Navbar";
import Body from "./components/Body";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NaviBar />}>
          <Route index element={<Body />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
