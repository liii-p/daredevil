import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul>
        <li>Home</li>
        <li>Daredevil History - Comics and TV</li>
        <li>Daredevil and Associates</li>
      </ul>
    </div>
  );
};

export default Header;
