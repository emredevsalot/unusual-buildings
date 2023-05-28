import { useEffect } from "react";

import { motion } from "framer-motion";

import AnimatedTitle from "@/components/AnimatedTitle";
import Footer from "@/components/Footer";
import { buildingsData, variantsOpacity } from "@/data";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <AnimatedTitle title="Unusual Buildings" />
          <div className="homepageBuildingsContainer">
            {buildingsData.map((building, index) => (
              <div
                className="homepageBuildingContainer"
                style={{
                  backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${building.image})`,
                }}
                key={index}
              >
                <span>{building.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
