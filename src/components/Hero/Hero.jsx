// import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          Hi, I&apos;m <span className={styles.title}>Misa Takeda</span>
        </h1>
        <h2>
          <span className={styles.subTitle}>Front-end Developer</span>
        </h2>
        <p className={styles.description}>
          I love building user-friendly interfaces, developing web apps that
          make tasks easier and more enjoyable, and bringing exciting ideas to
          life through code!
        </p>
        <div className={styles.btnContainer}>
          <a href="#projects" className={styles.projectsBtn}>
            Projects
          </a>
        </div>
      </div>
      {/* <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImg.png")}
        alt="sending love"
      /> */}
    </section>
  );
};
