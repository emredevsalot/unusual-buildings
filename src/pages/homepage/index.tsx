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
                  backgroundImage: `url(${building.image})`,
                }}
                key={index}
              >
                <div className="homepageBuildingName">{building.name}</div>
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
