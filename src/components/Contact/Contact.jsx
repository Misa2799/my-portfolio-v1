import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer>
      <div id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul>
          <li>
            <img src={getImageUrl()} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
