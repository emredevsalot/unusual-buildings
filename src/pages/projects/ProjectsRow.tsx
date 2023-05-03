import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button";

const variantsProjectRow = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

type Props = {
  index: number;
  name: string;
  description: string;
  url: string;
  image: string;
};

const ProjectsRow = ({ index, name, description, url, image }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      className={index % 2 === 0 ? "projectsRow" : "projectsRow reverse"}
      variants={variantsProjectRow}
      initial="initial"
      animate={controls}
    >
      <div
        className="projectsRow__Image"
        style={{
          backgroundImage: image,
        }}
      ></div>
      <div
        className={
          index % 2 === 0
            ? "projectsRow__Info ml-tablet"
            : "projectsRow__Info mr-tablet"
        }
      >
        <h2>{name}</h2>
        <p>{description}</p>
        <Button url={url} text="More Info" />
      </div>
    </motion.div>
  );
};

export default ProjectsRow;
