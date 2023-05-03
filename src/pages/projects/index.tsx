import { motion } from "framer-motion";
import { useEffect } from "react";
import { projectsRowData } from "../../data";
import ProjectsRow from "./ProjectsRow";
// import Footer from '../components/Footer';
// import Button from '../components/Button';
// import { projectsRowData } from '../data';
// import ProjectsRow from '../components/ProjectsRow';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variantsProjects = {
  initial: {
    // opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.9] },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9] },
  },
};

const variantsTitle = {
  animate: {
    y: 0,
    transition: {
      delay: 1,
      delayChildren: 0.3,
      staggerChildren: 0.03,
    },
  },
};

const variantsInfo = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.5, ease: "easeInOut" },
  },
};

const variantsProjectInfo = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.9, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const letter = {
  initial: { y: 150 },
  animate: { y: 0, transition: { ...transition } },
};

type Props = {};

const Projects = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        variants={variantsProjects}
        initial="initial"
        animate="animate"
        exit="exit"
        className="projects"
      >
        <div className="container">
          <div className="projectsInfo">
            <div className="projectsInfo__Title">
              <h1>
                <motion.span variants={variantsTitle}>
                  <span>
                    <motion.span variants={letter}>O </motion.span>
                    <motion.span variants={letter}>u </motion.span>
                    <motion.span variants={letter}>r </motion.span>
                  </span>{" "}
                  <motion.span variants={letter}> </motion.span>
                  <span>
                    <motion.span variants={letter}>P </motion.span>
                    <motion.span variants={letter}>r </motion.span>
                    <motion.span variants={letter}>o </motion.span>
                    <motion.span variants={letter}>j </motion.span>
                    <motion.span variants={letter}>e </motion.span>
                    <motion.span variants={letter}>c </motion.span>
                    <motion.span variants={letter}>t </motion.span>
                    <motion.span variants={letter}>s </motion.span>
                  </span>
                </motion.span>
              </h1>
            </div>

            <motion.p variants={variantsInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              quaerat blanditiis dignissimos asperiores quis quia cum officiis
              ad deserunt, eos molestiae vel totam adipisci saepe natus nam
              necessitatibus aperiam non!
            </motion.p>
          </div>
          {projectsRowData.map((project, index) => (
            <ProjectsRow
              index={index}
              name={project.name}
              description={project.description}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
