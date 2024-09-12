import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage as Error } from "formik"
import * as Yup from "yup"
import axios from 'axios';

import styles from "./LoginModal.module.css";
import Modal from "../../shared/Modal/Modal";


export const LoginModal = ({ isModalOpen, setModalOpen, authHeandler }) => {
  const regx = {
    email: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,}$/
  }

  const email = Yup.string()
    .matches(regx.email, "Incorrect e-mail")
    .required("Enter your e-mail");

  const password = Yup.string()
    .matches(regx.password, "Must be longer than 8 symbols")
    .required("Enter your password");

  const schemas = {
    custom: Yup.object().shape({ email, password })
  }


  const onSubmitHeandler = () => {
    const responceEmail = document.getElementsByName("email")[0].value;
    const responcePassword = document.getElementsByName("password")[0].value;

    setModalOpen(false)
    axios
      .post(`http://localhost:3333/user/login`, {
        login: responceEmail,
        password: responcePassword
      })
      .then(data => {
        console.log("responce", data);
        data.statusText === "OK" ? authHeandler(true) : console.log("мимо")
      })
  }

  const [show, setShow] = useState(false);

  return (
    <Modal open={isModalOpen} onClose={()=>setModalOpen(false)} >
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmitHeandler} validationSchema={schemas.custom}>
        <Form>
          <div className={styles.fill}>
            <div className={styles.modalHeader}>
              Sign in
            </div>
            <div className={styles.modalContent}>
              <div className={styles.emailBlock}>
                <Field type={"email"} name='email' placeholder="e-mail" className={styles.email} />
                <Error name="email" >{(error) => <span className={styles.error}>{error}</span>}</Error>
              </div>
              <div className={styles.password}>
                <Field type={show ? "text" : "password"} name='password' placeholder="password" className={styles.input} />
                <div className={styles.show} onClick={() => setShow(prevState => !prevState)}><img src={"icons/show.svg"} alt="show" /></div>
                <Error name="password" >{(error) => <span className={styles.error}>{error}</span>}</Error>
              </div>
              <button type="submit" className={styles.signInBtn}>
                Sign in
              </button>
              <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>

  )
};

