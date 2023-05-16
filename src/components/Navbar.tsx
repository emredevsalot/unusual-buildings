import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { variantsOpacity } from "@/data";

const Navbar = () => {
  const [scrolledNav, setScrolledNav] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolledNav]);
  //   scrolledNav at top maybe?
  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      // if (window.pageYOffset > window.innerHeight * 0.5) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };
  const handleMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <motion.div
      className={`navbar ${scrolledNav ? "whiteBg" : "transparent"}`}
      variants={variantsOpacity()}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <div className="navbar__content">
          <Link to="/" onClick={handleMenuOpened}>
            <div className="navbar__left">
              <img
                src={`${
                  scrolledNav
                    ? "/assets/hero-image.jpg"
                    : "/assets/hero-image.jpg"
                }`}
                alt="logo"
              />
            </div>
          </Link>
          <div className="navbar__icon" onClick={handleMenuOpened}>
            <FontAwesomeIcon
              icon={menuOpened ? faTimes : faBars}
              color="#140950"
              size="1x"
            />
          </div>
          <ul className={menuOpened ? "navbar__right active" : "navbar__right"}>
            <li>
              <Link to="/" onClick={handleMenuOpened}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleMenuOpened}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMenuOpened}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
