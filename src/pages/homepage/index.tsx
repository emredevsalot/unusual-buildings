import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import AnimatedTitle from "@/components/AnimatedTitle";
import Button from "@/components/Button";
// import Footer from "@/components/Footer";
import { buildingsData, variantsOpacity } from "@/data";

const Homepage = () => {
  const [randomBuilding, setRandomBuilding] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setRandomBuilding(Math.floor(Math.random() * buildingsData.length));
  }, []);
  return (
    <>
      <motion.div
        variants={variantsOpacity({ delay: 0.5 })}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container">
          <div className="homepageHero">
            <AnimatedTitle title="Unusual Buildings" />
            <motion.div variants={variantsOpacity({ delay: 2.5 })}>
              <p className="homepageDescription">
                Welcome to the world of unusual buildings! Step into a
                captivating journey through a collection of the most remarkable
                and unconventional buildings from around the globe. Our website
                is dedicated to showcasing the wonders of architectural
                innovation and pushing the boundaries of design.
              </p>
              <Button
                url={`/buildings/${buildingsData[randomBuilding].url}`}
                text="Random Building"
              />
            </motion.div>
          </div>
          <motion.div
            className="homepageBuildingsContainer"
            variants={variantsOpacity({ delay: 2.5 })}
          >
            {buildingsData.map((building, index) => (
              <Link to={`/buildings/${building.url}`}>
                <div
                  className="homepageBuildingContainer"
                  style={{
                    backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${building.image})`,
                  }}
                  key={index}
                >
                  <span>{building.name}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
