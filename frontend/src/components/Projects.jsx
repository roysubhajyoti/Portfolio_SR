import { PROJECTS } from "../constants/Info";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-violet-50 text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex flex-wrap justify-center lg:justify-center text-wrap"
            >
              <motion.div
                className="w-full lg:w-1/4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={150}
                  className="mb-6 rounded"
                />
              </motion.div>

              <motion.div
                className="w-full lg:w-3/4 max-w-xl "
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-4 text-center mb-2">
                  <h6 className="mb-2 text-violet-200 text-wrap font-semibold">
                    {project.title}
                  </h6>
                  <a
                    href={project.gitHub}
                    target="_blank"
                    className="border border-purple-300 py-1 px-2 text-sm rounded"
                  >
                    gitHub
                  </a>
                </div>
                <p className="mb-2 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.TechStack.map((tech, index) => (
                    <span
                      key={index}
                      className="py-1 px-2 border border-neutral-600 rounded mr-2 bg-neutral-900 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
