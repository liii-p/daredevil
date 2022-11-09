import React from "react";
import styles from "./Modal.module.scss";
// import "../Assets/partials/_fonts.scss";

const Modal = (props) => {
  if (!props.openModal) {
    return null;
  }

  console.log("Modalling");

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.modalBody}>{props.children}</div>
          <div className={styles.modalFooter}>
            <button onClick={props.onClose} className={styles.button}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
