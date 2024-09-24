import React from "react";

import cn from "classnames";
import styles from "./User.module.css";

const ava = "/icons/ava.svg";
const tel = "/icons/phone.svg";
const map = "/icons/map-pin.svg";
const date = "/icons/date.svg";
const edit = "/icons/edit.svg";
const backet = "/icons/backet.svg";

export const User = ({ name, age, phone, country, isAuth }) => {
  return (
    <div className={cn(styles.user, { [styles.admin]: isAuth })}>
      <div className={styles.buttons}>
        <img src={edit} alt="edit" className={styles.edit} />
        <img src={backet} alt="backet" className={styles.edit} />
      </div>
      <img src={ava} alt="ava" className={styles.ava} />
      <div className={styles.name}>{name}</div>
      <div className={styles.infoString}>
        <img src={map} alt="map" className={styles.pic} />
        <div>{country}</div>
      </div>
      <div className={styles.infoString}>
        <img src={tel} alt="phone" className={styles.pic} />
        <div>{phone}</div>
      </div>
      <div className={styles.infoString}>
        <img src={date} alt="date" className={styles.pic} />
        <div>{age}</div>
      </div>
    </div>
  );
};
