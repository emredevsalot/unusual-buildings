import { motion } from "framer-motion";

import { variantsSlideInChild, variantsStaggerParent } from "@/data";

type Props = {
  title: string;
};

const AnimatedTitle = ({ title }: Props) => {
  return (
    <div className="animatedTitleContainer">
      <h1 className="animatedTitle">
        <motion.span
          variants={variantsStaggerParent()}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {title.split("").map((letter, index) => (
            <motion.span
              variants={variantsSlideInChild({ initY: 350 })}
              key={index}
            >
              {letter !== " " ? letter : <>&nbsp;</>}
            </motion.span>
          ))}
        </motion.span>
      </h1>
    </div>
  );
};

export default AnimatedTitle;
