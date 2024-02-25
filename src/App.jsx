import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
