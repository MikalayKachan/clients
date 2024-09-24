import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage as Error } from "formik";
import * as Yup from "yup";
import axios from 'axios';

import styles from "./LoginModal.module.css";
import Modal from "../../shared/Modal/Modal";

export const LoginModal = ({ isModalOpen, setModalOpen, authHandler }) => {
  const regx = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,}$/
  };

  const schemas = Yup.object().shape({
    email: Yup.string()
      .matches(regx.email, "Incorrect e-mail")
      .required("Enter your e-mail"),
    password: Yup.string()
      .matches(regx.password, "Must be longer than 8 symbols")
      .required("Enter your password")
  });

  const onSubmitHandler = (values, { setSubmitting }) => {
    const { email: responseEmail, password: responsePassword } = values;

    setModalOpen(false);
    axios
      .post(`http://localhost:3333/user/login`, {
        login: responseEmail,
        password: responsePassword
      })
      .then(response => {
        console.log("response", response);
        if (response.status === 200) {
          authHandler(true);
        } else {
          console.log("Ошибка: неверный статус ответа");
        }
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

  const [show, setShow] = useState(false);

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
              <div className={styles.modalHeader}>Sign in</div>
              <div className={styles.modalContent}>
                <div className={styles.emailBlock}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    className={styles.email}
                  />
                  <Error name="email">
                    {(error) => <span className={styles.error}>{error}</span>}
                  </Error>
                </div>
                <div className={styles.password}>
                  <Field
                    type={show ? "text" : "password"} // Правильное отображение пароля
                    name="password"
                    placeholder="password"
                    className={styles.input}
                  />
                  <div
                    className={styles.show}
                    onClick={() => setShow((prevState) => !prevState)}
                  >
                    <img src={"icons/show.svg"} alt="show" />
                  </div>
                  <Error name="password">
                    {(error) => <span className={styles.error}>{error}</span>}
                  </Error>
                </div>
                <button
                  type="submit"
                  className={styles.signInBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
