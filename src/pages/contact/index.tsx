import { useEffect } from "react";

import { motion } from "framer-motion";
import { Map, Marker } from "pigeon-maps";

import Footer from "@/components/Footer";
import { variantsOpacity } from "@/data";

const Contact = () => {
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
        className="contact"
      >
        <div className="container">
          <h1>Contact</h1>
          <div className="contact__flex">
            <div className="contact__info">
              <p>Lorem ipsum place</p>
              <br />
              <p>Loremipsumstrasse</p>
              <p>99999 Berlin</p>
              <br />
              <p>
                <a href="tel:000 000000-0">Tel: 000 000000-0</a>
              </p>
              <br />
              <p>
                <a href="mailto:info@lorem.com">Mail: info@lorem.com</a>
              </p>
            </div>
            <div className="contact__map">
              <Map
                height={300}
                defaultCenter={[50.879, 4.6997]}
                defaultZoom={11}
              >
                <Marker width={50} anchor={[50.879, 4.6997]} />
              </Map>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
