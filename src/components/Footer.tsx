import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variantsFooter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.5 },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={variantsFooter}
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
        <Link to="/">Homepage</Link> | <Link to="/">Homepage</Link> |{" "}
        <Link to="/">Homepage</Link>
      </p>
    </motion.div>
  );
};

export default Footer;
