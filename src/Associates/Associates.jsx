import { useState } from "react";
import styles from "./Associates.module.scss";
import Modal from "../Modal/Modal.jsx";

const Associates = (show) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.associates}>
      <h2>Daredevil and Associates</h2>
      <section className={styles.associates__allies}>
        <h2>The Allies</h2>
        <ul>
          <div className={styles.foggy}>
            <li>
              <button onClick={() => setOpenModal(true)}>
                Franklin "Foggy" Nelson
              </button>
              <Modal openModal={openModal} />
            </li>
          </div>
          <div>
            <li>Karen Page</li>
          </div>
          <div>
            <li>Stick</li>
          </div>
          <div>
            <li>Jessica Jones</li>
          </div>
          <div>
            <li>Luke Cage</li>
          </div>
          <div>
            <li>Black Widow (comics)</li>
          </div>
          <div>
            <li>Spider-Man (comics)</li>
          </div>
        </ul>
      </section>
      <section className={styles.associates__enemies}>
        <h2>The Enemies</h2>
        <ul>
          <li>Wilson Fisk AKA "Kingpin"</li>
          <li>Punisher</li>
          <li>The Hand</li>
          <li>Benjamin Poindexer AKA Bullseye</li>
          <li>Punisher</li>
          <li>Elektra</li>
          <li>Mr Fear</li>
          <li>Typhoid Mary</li>
          <li>Purple Man</li>
        </ul>
      </section>
    </div>
  );
};

export default Associates;
