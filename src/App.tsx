import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import "../src/sass/main.scss";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import SingleBuilding from "./pages/singleBuilding";

function App() {
  const routes = useRoutes([
    {
      path: "/unusual-buildings/",
      element: <Homepage />,
    },
    {
      path: "/unusual-buildings/buildings/:buildingUrl",
      element: <SingleBuilding />,
    },
    {
      path: "/unusual-buildings/contact",
      element: <Contact />,
    },
  ]);

  const location = useLocation();

  if (!routes) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(routes, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
