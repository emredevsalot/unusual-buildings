import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/homepage";
import Services from "./pages/services";

function App() {
  //EX: https://codesandbox.io/s/framer-motion-react-router-6-page-transitions-2f2olf

  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/services",
      element: <Services />,
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
