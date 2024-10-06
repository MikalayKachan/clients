import React, { useState } from "react";
import { Field, Form, Formik, FormikProps } from "formik";

import * as Yup from "yup";
import axios from "axios";

import { COUNTRIES } from '../../shared/Countries/countries.ts';
import { CountrySelector } from '../../shared/Countries/selector.tsx';
import type { SelectMenuOption } from '../../shared/Countries/types.ts'


import styles from "./NewClientModal.module.css";
import Modal from "../../shared/Modal/Modal.js";

export const NewClientModal = ({ isModalOpen, setModalOpen }) => {
  const regx = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,}$/,
  };

  const schemas = Yup.object().shape({
    email: Yup.string()
      .matches(regx.email, "Incorrect e-mail")
      .required("Enter your e-mail"),
    password: Yup.string()
      .matches(regx.password, "Must be longer than 8 symbols")
      .required("Enter your password"),
  });

  const onSubmitHandler = (values, { setSubmitting }) => {
    const { email: responseEmail, password: responsePassword } = values;

    setModalOpen(false);
    axios
      .post(`http://localhost:3333/user/login`, {
        login: responseEmail,
        password: responsePassword,
      })
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        if (error.response) {
          console.log("Ошибка ответа от сервера:", error.response.data);
        } else if (error.request) {
          console.log("Запрос отправлен, но ответа нет:", error.request);
        } else {
          console.log("Произошла ошибка:", error.message);
        }
      })
      .finally(() => setSubmitting(false));
  };


  /* const [country, setCountry] = useState(""); */

  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('AF');


  return (
    <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitHandler}
        validationSchema={schemas}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.fill}>
              <div className={styles.modalHeader}>New client</div>
              <div className={styles.info}>
                <div className={styles.namePart}>
                  <div>
                    <label className={styles.label}>First name</label>
                    <Field
                      type="name"
                      name="first name"
                      className={styles.name}
                    />
                  </div>
                  <div>
                    <label className={styles.label}>Lirst name</label>
                    <Field
                      type="name"
                      name="last name"
                      className={styles.name}
                    />
                  </div>
                </div>

                <div className={styles.dataPart}>
                  <label className={styles.label}>Date of birth</label>
                  <Field
                    type="date"
                    name="date"
                    className={styles.dataItem}
                  />
                </div>

                <div className={styles.dataPart}>
                  <label className={styles.label}>Country</label>
                  <CountrySelector
                    id={"country-selector"}
                    open={isOpen}
                    onToggle={() => setIsOpen(!isOpen)}
                    onChange={setCountry}
                    selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption}
                  />
                </div>

                <div className={styles.dataPart}>
                  <label className={styles.label}>Phone</label>
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="phone"
                    className={styles.dataItem}
                  />
                </div>
              </div>
              <div>
                <button className={styles.saveBtn}>Save</button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
