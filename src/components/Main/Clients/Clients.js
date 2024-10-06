import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import styles from "./Clients.module.css";
import { User } from "./User/User";
import { ReactComponent as Top } from "../../../icons/top.svg";
import { ReactComponent as Down } from "../../../icons/down.svg";

import { useOnClickOutside } from "../../../utils/index";

const sort = "/icons/sort.svg";
const drop = "/icons/drop.svg";

export const Clients = ({ isAuth, setModalOpen }) => {
  const [data, setData] = useState([]);

  const ref = useRef();

  useEffect(() => {
    axios.get(`http://localhost:3333/clients`)
      .then(response => {
        setData(response.data.clients);
      })
      .catch(error => {
        console.error("Ошибка при получении данных", error);
      });
  }, []);

  console.log(data);

  const dataToRender = data.map(c => (
    <User
      key={c.id}
      id={c.id}
      name={c.name}
      age={c.age}
      phone={c.phone}
      country={c.country}
      isAuth={isAuth}
      setModalOpen={setModalOpen}
    />
  ));

  const [isOpen, setOpen] = useState(false);
  console.log("isOpen", isOpen);
  const handleOpen = () => {
    console.log(123);
    setOpen(prevState => !prevState);
  };
  const onBlurHandle = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, onBlurHandle);

  const [isAsc, setAsc] = useState(true);

  return (
    <div>
      <div className={styles.Wrapper} tabindex={0} ref={ref}>
        <div className={styles.drop} onClick={handleOpen}>
          <div className={styles.sortBy}>
            <img src={sort} alt="sort" className={styles.sort} />
            <div>Sort by:</div>
          </div>
          <div className={styles.select}>
            <div>{"Name"}</div>
            <img src={drop} alt="drop" />
          </div>
        </div>
        {isOpen ? (
          <div className={styles.dropContent}>
            <li className={styles.inputLine}>
              <input
                type="radio"
                name="sort"
                value="age"
                style={{ cursor: "pointer" }}
              />
              <div className={styles.inputText}>Age</div>
            </li>
            <li className={styles.inputLine}>
              <input
                type="radio"
                name="sort"
                value="country"
                style={{ cursor: "pointer" }}
              />
              <div>Country</div>
            </li>
            <div className={styles.toggle}>
              <div
                className={isAsc ? styles.on : styles.off}
                onClick={() => setAsc(true)}
              >
                <Top />
                Asc.
              </div>
              <div
                className={isAsc ? styles.off : styles.on}
                onClick={() => setAsc(false)}
              >
                <Down />
                Desc.
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.body}>
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
        {dataToRender}
      </div>
    </div>
  );
};
