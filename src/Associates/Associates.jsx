import styles from "./Associates.module.scss";

const Associates = () => {
  return (
    <div className={styles.associates}>
      <h2>Daredevil and Associates</h2>
      <section className={styles.associates__allies}>
        <h2>The Allies</h2>
        <ul>
          <li>Franklin "Foggy" Nelson</li>
          <li>Karen Page</li>
          <li>Elektra</li>
          <li>Stick</li>
          <li>Jessica Jones</li>
          <li>Luke Cage</li>
          <li>Punisher</li>
          <li>Black Widow (comics)</li>
          <li>Spider-Man (comics)</li>
        </ul>
      </section>
      <section className={styles.associates__enemies}>
        <h2>The Enemies</h2>
        <ul>
          <li>Wilson Fisk AKA "Kingpin"</li>
          <li>Punisher</li>
          <li>The Hand</li>
          <li>Benjamin Poindexer AKA Bullseye</li>
        </ul>
      </section>
    </div>
  );
};

export default Associates;
