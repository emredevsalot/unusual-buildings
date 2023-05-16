import { motion } from "framer-motion";

import { variantsSlideInChild, variantsStaggerParent } from "@/data";

type Props = {
  title: string;
};

const AnimatedTitle = ({ title }: Props) => {
  return (
    <h1>
      <motion.span variants={variantsStaggerParent()}>
        {title.split("").map((letter) => (
          <motion.span variants={variantsSlideInChild({ initY: 350 })}>
            {letter !== " " ? letter : <>&nbsp;</>}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedTitle;