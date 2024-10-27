import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <li className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.contents}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
          <p className={styles.description}>{description}</p>
        </ul>
        <div className={styles.links}>
          {demo === "In Progress" ? (
            <span className={styles.link}>{demo}</span>
          ) : (
            <a href={demo} className={styles.link}>
              Demo
            </a>
          )}
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
    </li>
  );
};
