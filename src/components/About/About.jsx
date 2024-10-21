import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
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
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/html.png")} alt="html5" />
            <p className={styles.itemTitle}>HTML5</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/css.png")} alt="css3" />
            <p className={styles.itemTitle}>CSS3</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/js.png")} alt="javascript" />
            <p className={styles.itemTitle}>JavaScript</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/jquery.png")} alt="jquery" />
            <p className={styles.itemTitle}>jQuery</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/react.png")} alt="react" />
            <p className={styles.itemTitle}>React</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/node.png")} alt="node.js" />
            <p className={styles.itemTitle}>Node.js</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/git.png")} alt="git" />
            <p className={styles.itemTitle}>Git</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/github-mark.png")} alt="github" />
            <p className={styles.itemTitle}>GitHub</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/mongodb.png")} alt="mongodb" />
            <p className={styles.itemTitle}>Mongodb</p>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/postgresql.png")} alt="postgresql" />
            <p className={styles.itemTitle}>PostgreSQL</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
