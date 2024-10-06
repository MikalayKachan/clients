import React, { useState } from "react";

import styles from "./LogoutModal.module.css";
import Modal from "../../shared/Modal/Modal";


export const LogoutModal = ({ isModalOpen, setModalOpen, authHandler }) => {

const outHandler = () => {
  authHandler(false)
  setModalOpen(false)
}

  return (
    <Modal open={isModalOpen} onClose={() => setModalOpen(false)} >
      <div className={styles.fill}>
        <div className={styles.modalHeader}>
          Sign out
        </div>
        <div className={styles.sure}>
          Are you sure you want to sign out?
        </div>
        <button className={styles.signOutBtn} onClick={outHandler}>
          Yes, sign out
        </button>
        <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
          No, close
        </button>
      </div>
    </Modal>
  )
};

