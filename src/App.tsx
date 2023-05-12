import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import "../src/sass/main.scss";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import PrivacyPolicy from "./pages/privacyPolicy";
import Projects from "./pages/projects";
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
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
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
