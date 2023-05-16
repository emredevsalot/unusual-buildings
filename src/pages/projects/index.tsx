import { useEffect } from "react";

import { motion } from "framer-motion";

import AnimatedTitle from "@/components/AnimatedTitle";
import Footer from "@/components/Footer";
import { projectsRowData, variantsOpacity, variantsSlideIn } from "@/data";

import ProjectsRow from "./ProjectsRow";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        variants={variantsOpacity()}
        initial="initial"
        animate="animate"
        exit="exit"
        className="projects"
      >
        <div className="container">
          <div className="projectsInfo">
            <div className="projectsInfo__Title">
              <AnimatedTitle title="Our Projects" />
            </div>

            <motion.p variants={variantsSlideIn({ initY: 30, delay: 1.3 })}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              quaerat blanditiis dignissimos asperiores quis quia cum officiis
              ad deserunt, eos molestiae vel totam adipisci saepe natus nam
              necessitatibus aperiam non!
            </motion.p>
          </div>
          {projectsRowData.map((project, index) => (
            <ProjectsRow
              key={index}
              index={index}
              name={project.name}
              description={project.description}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
