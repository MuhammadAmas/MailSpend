import React from "react";
import Connect from "./pages/Connect/Connect.jsx";
import PreferencesForm from "./pages/PreferencesForm/PreferencesForm.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const AppRoutes = [
  {
    path: "/",
    element: <Connect />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
  ,
  {
    path: "/preferences",
    element: <PreferencesForm />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
];

export default AppRoutes;
