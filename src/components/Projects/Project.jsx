import projects from "../../data/projects.json";
import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section className={styles.container}>
      <h2 id="projects" className={styles.title}>
        <span className={styles.marker_secondary}>Projects</span>
      </h2>

      <ul className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </ul>
    </section>
  );
};
