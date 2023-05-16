import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { variantsOpacity } from "@/data";

const Footer = () => {
  return (
    <motion.div
      variants={variantsOpacity({ delay: 0.5 })}
      initial="initial"
      animate="animate"
      exit="exit"
      className="footer"
    >
      <p className="footer__p1">
        Loremplace <span>Loremstrasse. 26 </span>{" "}
        <span>
          Tel. <a href="tel:00000000-0">000 0000 000-0</a>
        </span>
      </p>
      <p className="footer__p2">
        {" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </p>
    </motion.div>
  );
};

export default Footer;
