import { useRef, useEffect } from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { homepageRowData } from "../../data";
import Button from "../../components/Button";
import HomepageRow from "./HomepageRow";

const variantsHero = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 }, //ease: [0.6, 0.01, -0.05, 0.9] },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.5 }, //ease: [0.6, 0.01, -0.05, 0.9] },
  },
};
const variantsHeroButton = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1.5, delay: 1.3 }, //ease: [0.6, 0.01, -0.05, 0.9] },
  },

  exit: {
    opacity: 0,
    transition: { delay: 0.5 }, //ease: [0.6, 0.01, -0.05, 0.9] },
  },
};

const Homepage = () => {
  const developmentSection = useRef<any>(null);
  const goToDevelopmentSection = () => {
    if (developmentSection.current == null) return;
    window.scrollTo({
      top: developmentSection.current.offsetTop - 260,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        variants={variantsHero}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 30%), url('/assets/hero-image.jpg')`,
        }}
      >
        <motion.div
          variants={variantsHeroButton}
          whileHover={{
            y: -10,
            transition: { ease: "easeInOut" },
          }}
          className="hero__button"
          onClick={goToDevelopmentSection}
        >
          <div className="hero__text">
            <h3>How we develop our projects</h3>
          </div>
          <div className="hero__icon">
            <FontAwesomeIcon icon={faChevronDown} color="white" size="2x" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={variantsHero}
        initial="initial"
        animate="animate"
        exit="exit"
        className="home2"
      >
        <div className="container">
          <div ref={developmentSection}></div>
          {homepageRowData.map((data, index) => (
            <HomepageRow
              index={index}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          ))}
          <div className="home2__row borderTop">
            <Button url="/projects" text="Our Projects" />
          </div>
        </div>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
