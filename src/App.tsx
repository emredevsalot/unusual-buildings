import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

import Homepage from "./pages/homepage";
import Services from "./pages/services";

function App() {
  //EX: https://codesandbox.io/s/framer-motion-react-router-6-page-transitions-2f2olf

  const elements = useRoutes([
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

  if (!elements) return null;

  return (
    <AnimatePresence mode="wait">
      {/* <AnimatePresence mode="wait"> */}
      {React.cloneElement(elements, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
