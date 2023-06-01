import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import parse from "html-react-parser";

// import Footer from "@/components/Footer";
import { buildingsData } from "@/data";

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
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  exit: {
    width: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

var name = "";
var address = "";
var addressLink = "";
var previous = "";
var next = "";
var image = "";
var imageCredit = "";
var imageCreditLink = "";
var description = "";
var buildingExists = false;

const SingleBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { buildingUrl } = useParams();

  buildingsData.map((building) => {
    if (building.url == buildingUrl) {
      var buildingIndex = buildingsData.indexOf(building);

      name = building.name;
      address = building.address;
      addressLink = building.addressLink;
      if (buildingIndex == 0) {
        previous = buildingsData[buildingsData.length - 1].url;
      } else {
        previous = buildingsData[buildingIndex - 1].url;
      }
      if (buildingIndex == buildingsData.length - 1) {
        next = buildingsData[0].url;
      } else {
        next = buildingsData[buildingIndex + 1].url;
      }
      image = building.image;
      imageCredit = building.imageCredit;
      imageCreditLink = building.imageCreditLink;
      description = building.description;
      buildingExists = true;
    }
  });

  if (buildingExists) {
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
                <Link to={`/unusual-buildings/buildings/${previous}`}>
                  <p>Previous</p>
                </Link>
              </div>

              {/* <div
                className="singleNav__Middle"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div> */}
              <div className="singleNav__Next">
                <Link to={`/unusual-buildings/buildings/${next}`}>
                  <p>Next</p>
                </Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  color="#140950"
                  size="1x"
                />
              </div>
            </div>
            <div>
              Photo by <a href={imageCreditLink}>{imageCredit}</a>
            </div>
            {/* <Footer /> */}
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

export default SingleBuilding;
