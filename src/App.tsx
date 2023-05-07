import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "../src/sass/main.scss";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SingleProject from "./pages/singleProject";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/:projectName",
      element: <SingleProject />,
    },
    {
      path: "/contact",
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
