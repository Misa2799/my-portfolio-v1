import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>
          <span className={styles.marker_secondary}>Contact</span>
        </h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://github.com/Misa2799">
              <img src={getImageUrl("contact/github-mark.png")} alt="GitHub" />
            </a>
          </li>
          {/* <li>
            <a href="https://www.linkedin.com/in/misa-takeda-425b2829b/">
              <img
                src={getImageUrl("assets/contact/linkedinIcon.png.png")}
                alt="LinkedIn"
              />
            </a>
          </li> */}
          <li className={styles.link}>
            <a href="mailto:misatakeda.2799@gmail.com">
              <img src={getImageUrl("contact/envelope.png")} alt="Gmail" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
