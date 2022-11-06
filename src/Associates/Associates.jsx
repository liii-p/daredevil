import { useState } from "react";
import styles from "./Associates.module.scss";
import Modal from "../Modal/Modal.jsx";

const Associates = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.associates}>
      <h2>Daredevil and Associates</h2>
      <section className={styles.associates__alpes}>
        <h2>The Allies</h2>

        <div className={styles.foggy}>
          <p>
            <p onClick={() => setOpenModal(true)} onMouseOver="Cursor">
              Franklin "Foggy" Nelson
            </p>
            <Modal
              title="Foggy Nelson"
              onClose={() => setOpenModal(false)}
              openModal={openModal}
            >
              <p>This is about Foggy</p>
            </Modal>
          </p>
        </div>
        <div>
          <p>Karen Page</p>
        </div>
        <div>
          <p>Stick</p>
        </div>
        <div>
          <p>Jessica Jones</p>
        </div>
        <div>
          <p>Luke Cage</p>
        </div>
        <div>
          <p>Black Widow (comics)</p>
        </div>
        <div>
          <p>Spider-Man (comics)</p>
        </div>
      </section>
      <section className={styles.associates__enemies}>
        <h2>The Enemies</h2>
        <ul>
          <p>Wilson Fisk AKA "Kingpin"</p>
          <p>Punisher</p>
          <p>The Hand</p>
          <p>Benjamin Poindexer AKA Bullseye</p>
          <p>Punisher</p>
          <p>Elektra</p>
          <p>Mr Fear</p>
          <p>Typhoid Mary</p>
          <p>Purple Man</p>
        </ul>
      </section>
    </div>
  );
};

export default Associates;
