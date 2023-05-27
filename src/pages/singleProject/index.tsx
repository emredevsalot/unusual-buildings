import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import parse from "html-react-parser";

import Footer from "@/components/Footer";
import { projectsData } from "@/data";

import Homepage from "../homepage";

const variantsSingleLeft = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 1.2, duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const variantsSingleOverlay = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      /*delay: 0.5,*/ duration: 1.5,
      //   ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
  exit: {
    width: 0,
    transition: { delay: 1, ease: "easeInOut" },
  },
};

var name = "";
var address = "";
var addressLink = "";
var previous = "";
var next = "";
var image = "";
var description = "";
var projectExists = false;

const SingleProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { projectName } = useParams();

  {
    projectsData.map((project) => {
      if (project.url == projectName) {
        name = project.name;
        address = project.address;
        addressLink = project.addressLink;
        previous = project.previous;
        next = project.next;
        image = project.image;
        description = project.description;
        projectExists = true;
      }
    });
  }
  if (projectExists) {
    return (
      <>
        <motion.div
          className="single"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div className="singleLeft" variants={variantsSingleLeft}>
            <div className="singleInfo">
              <h1>{name}</h1>
              <h3>
                <a href={addressLink} target="_blank" rel="noreferrer noopener">
                  {address}
                </a>
              </h3>
              <div
                className="laptopSlider"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
              {parse(description)}
            </div>
            <div className="singleNav">
              <div className="singleNav__Prev">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  color="#140950"
                  size="1x"
                />
                <Link to={previous}>
                  <p>Previous</p>
                </Link>
              </div>

              <div
                className="singleNav__Middle"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
              <div className="singleNav__Next">
                <Link to={next}>
                  <p>Next</p>
                </Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="#140950"
                  size="1x"
                />
              </div>
            </div>
            <Footer />
          </motion.div>

          <div className="singleRight">
            <motion.div
              className="singleRight__Overlay"
              variants={variantsSingleOverlay}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return <Homepage />;
  }
};

export default SingleProject;
