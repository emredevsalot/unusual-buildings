import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";

import { variantsSlideIn } from "@/data";

type Props = {
  index: number;
  title: string;
  description: string;
  image: string;
};

const HomepageRow = ({ index, title, description, image }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
    // if (!inView) {
    //   controls.start('exit');
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variantsSlideIn({ initX: 0, initY: 30 })}
      initial="initial"
      animate={controls}
      className={`home2__row ${index % 2 === 0 ? "" : "reverse"} ${
        index !== 0 ? "borderTop" : ""
      }`}
    >
      <div
        className="home2__row__icon"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={`home2__row__info ${index % 2 === 0 ? "ml-5" : "mr-5"}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default HomepageRow;
