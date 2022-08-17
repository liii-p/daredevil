import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul>
        <Link to="/" className={styles.Link}>
          <li>Home</li>
        </Link>
        <Link to="/history" className={styles.Link}>
          <li>Daredevil History - Comics and TV</li>
        </Link>
        <Link to="/associates" className={styles.Link}>
          <li>Daredevil and Associates</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
