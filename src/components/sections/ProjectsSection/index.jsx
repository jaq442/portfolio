import { ProjectsList } from "./ProjectsList";

import { projects } from "../../../data/projects.js";

import styles from "../ProjectsSection/ProjectsList/styles.module.css";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title2">Projetos</h2>
        <ul className={styles.listContainer}>
          {projects.map((project) => {
            return (
              <ProjectsList
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
