import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        <span className={styles.marker_secondary}>About</span>
      </h2>
      <div className={styles.content}>
        <p className={styles.aboutText}>
          I&apos;m passionate about creating applications that not only function
          seamlessly but also enhance people&apos;s everyday lives. Whether
          I&apos;m building sleek, accessible websites or experimenting with new
          technologies, I&apos;m always eager to learn and improve. I&apos;m
          excited for the opportunity to bring my creativity and technical
          skills to a professional environment!
        </p>
        <h3 className={styles.aboutSkills}>
          <span className={styles.marker_primary}>Skills</span>
        </h3>
        <ul className={styles.aboutItems}>
          {skills.map((skill, index) => {
            return (
              <li key={index} className={styles.aboutItem}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                <p className={styles.itemTitle}>{skill.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
