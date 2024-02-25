import React from "react";
import Connect from "./components/Connect/Connect.jsx";
import PreferencesForm from "./components/PreferencesForm/PreferencesForm.jsx";
import Chat from "./components/Chat/Chat.jsx";

const AppRoutes = [
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
    path: "/chat",
    element: <Chat />,
  },
];

export default AppRoutes;
