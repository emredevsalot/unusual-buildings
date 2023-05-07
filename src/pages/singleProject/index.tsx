import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useEffect } from "react";
import { projectsData } from "../../data";
import Footer from "../../components/Footer";
import Homepage from "../homepage";
import Slider from "../../components/Slider";

import { ReactImageGalleryItem } from "react-image-gallery";

const variantsSingle = {
  initial: {
    // opacity: 0,
  },
  animate: {
    // opacity: 1
  },
  exit: {
    // opacity: 0,
    // transition: { /*delay: 0.5,*/ ease: [0.6, 0.01, -0.05, 0.9] },
  },
};
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
var images: ReadonlyArray<ReactImageGalleryItem> = [{ original: "" }];
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
        images = project.images;
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
          variants={variantsSingle}
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
              <div className="laptopSlider">
                <Slider images={images} />
              </div>
              {/* <p> */}
              {/* {description.map((desc, key) => (
                    <p>{desc}</p>
                  ))} */}
              {/* parse({description}) */}
              {parse(description)}
              {/* </p> */}
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
                  backgroundImage: `url('/assets/hero-image.jpg')`,
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
              className="singleRight__Slider"
              variants={variantsSingleLeft}
            >
              <Slider images={images} />
            </motion.div>
            <motion.div
              className="singleRight__Overlay"
              variants={variantsSingleOverlay}
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
