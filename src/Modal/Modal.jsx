import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  if (!props.openModal) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <h3>Title</h3>
          </div>
          <div className={styles.modalContent}>Modal content here</div>
          <div className={styles.modalFooter}>
            <button className={styles.button}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
