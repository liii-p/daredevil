import { useState } from "react";
import styles from "./Associates.module.scss";
import Modal from "../Modal/Modal.jsx";

const Associates = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.associates}>
      <h2>Daredevil and Associates</h2>
      <h3>
        Click a name below for more info. (Only foggy's info is functional so
        far)
      </h3>
      <section className={styles.associates__allies}>
        <h3>The Allies</h3>

        <div className={styles.foggy}>
          <p onClick={() => setOpenModal(true)}>Franklin "Foggy" Nelson</p>
          <Modal
            title="Foggy Nelson"
            onClose={() => setOpenModal(false)}
            openModal={openModal}
          >
            <img
              src="https://sportshub.cbsistatic.com/i/2021/03/17/08a75f69-5e13-4de0-86c4-dc8904d7616c/foggy-nelson-daredevil-1150287.jpg"
              width="100%"
            />
            <p>This is about Foggy</p>
          </Modal>
        </div>
        <div>
          {/* <p onClick={() => setOpenModal(true)}>Karen Page</p>
          <Modal
            title="Karen Page"
            onClose={() => setOpenModal(false)}
            openModal={openModal}
          >
            <p>This is about Karen Page.</p>
          </Modal> */}
        </div>
        <div>
          <p onClick={() => setOpenModal(true)}>Stick</p>
        </div>
        <div>
          <p onClick={() => setOpenModal(true)}>Jessica Jones</p>
        </div>
        <div>
          <p onClick={() => setOpenModal(true)}>Luke Cage</p>
        </div>
        <div>
          <p onClick={() => setOpenModal(true)}>Black Widow (comics)</p>
        </div>
        <div>
          <p onClick={() => setOpenModal(true)}>Spider-Man (comics)</p>
        </div>
      </section>
      <section className={styles.associates__enemies}>
        <h3>The Enemies</h3>
        <p>Wilson Fisk AKA "Kingpin"</p>
        <p>Punisher</p>
        <p>The Hand</p>
        <p>Benjamin Poindexer AKA Bullseye</p>
        <p>Punisher</p>
        <p>Elektra</p>
        <p>Mr Fear</p>
        <p>Typhoid Mary</p>
        <p>Purple Man</p>
      </section>
    </div>
  );
};

export default Associates;
