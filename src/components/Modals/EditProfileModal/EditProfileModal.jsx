import React, { useState } from "react";
import axios from "axios";

import styles from "./EditProfileModal.module.css";
import Modal from "../../shared/Modal/Modal";
import { ReactComponent as BasketIcon } from "../../../icons/backet.svg";

const edit = "/icons/edit.svg";
const ava = "/icons/ava.svg";
const tel = "/icons/phone.svg";
const map = "/icons/map-pin.svg";
const date = "/icons/date.svg";
/* const backet = "/icons/backet.svg"; */

export const EditProfileModal = ({isModalOpen, setModalOpen}) => {
  return (
    <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
      <div className={styles.main}>
        <div className={styles.editButtons}>
          <div className={styles.editButton}>
            <img src={edit} alt="edit" className={styles.edit} />
            <div>Edit profile</div>
          </div>
          <div className={`${styles.editButton} ${styles.red}`}>
            <BasketIcon style={{ stroke: "rgba(233, 40, 27, 1)" }} />
            <div>Delete client</div>
          </div>
        </div>

        <div className={styles.profile}>
          <img src={ava} alt="ava" className={styles.ava} />
          <div className={styles.name}>Name</div>
          <div className={styles.userInfo}>
            <div className={styles.infoString}>
              <img src={map} alt="map" className={styles.pic} />
              <div>country</div>
            </div>
            <div className={styles.infoString}>
              <img src={tel} alt="phone" className={styles.pic} />
              <div>phone</div>
            </div>
            <div className={styles.infoString}>
              <img src={date} alt="date" className={styles.pic} />
              <div>age</div>
            </div>
          </div>
        </div>
        <div className={styles.close} onClick={() => setModalOpen(false)}>Close</div>
      </div>
    </Modal>
  );
};
