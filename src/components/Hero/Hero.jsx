import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          Hi, my name is <span className={styles.title}>Misa</span>
        </h1>
        <h2>
          I&apos;m a <span className={styles.subTitle}>Web developer</span>
        </h2>
        <p className={styles.description}>
          I love building user-friendly interfaces, developing web apps, and
          bringing exciting ideas to life through code!
        </p>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImg.png")}
        alt="sending love"
      />
    </section>
  );
}
