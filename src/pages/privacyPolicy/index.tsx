import { useEffect } from "react";

import { motion } from "framer-motion";

import Footer from "../../components/Footer";

const variantsPrivacyPolicy = {
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

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        variants={variantsPrivacyPolicy}
        initial="initial"
        animate="animate"
        exit="exit"
        className="privacyPolicy"
      >
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="privacyPolicy__flex">
            <div className="privacyPolicy__left">
              <p>Company Name GMBH</p>
              <br />
              <p>addresss 56 </p>
              <p>99999 world</p>
              <br />
              <p>TEL: 000 000000-0</p>
              <br />
              <p>
                <a href="mailto:mail@mail.com">mail@mail.com</a>{" "}
              </p>
              <p>
                <a href="www.website.com">www.website.com</a>
              </p>
              <br />
              <p>Manager: John Doe</p>
            </div>
            <div className="privacyPolicy__right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                malesuada, purus quis congue accumsan, ex metus dapibus eros,
                eget feugiat lorem lorem vel nibh. Fusce dapibus, lorem vitae
                posuere vehicula, arcu tellus ullamcorper velit, sit amet
                fermentum sapien mauris a tellus
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                malesuada, purus quis congue accumsan, ex metus dapibus eros,
                eget feugiat lorem lorem vel nibh. Fusce dapibus, lorem vitae
                posuere vehicula, arcu tellus ullamcorper velit, sit amet
                fermentum sapien mauris a tellus
              </p>
              <br />
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className="privacyPolicy__bottom">
            <br />
            <br />
            <p>Links to Third Party Sites:</p>
            <p>
              This website and our electronic publications may contain links to
              other websites over which Company GmbH has no control. Company
              GmbH assumes no responsibility or liability whatsoever for the
              operation and content of such websites.
            </p>
            <br />
            <p>Webdesign: Emre Ergül</p>
            <br />
            <p>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/prettycons"
                title="prettycons"
              >
                prettycons
              </a>
              ,{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                flaticon
              </a>{" "}
              and{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from <a href="https://www.flaticon.com">www.flaticon.com</a>
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
