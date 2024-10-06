import React, { useState } from "react";

import styles from "./Main.module.css";
import { Header } from "./Header/Header";
import { ClientsContainer } from "./Clients/ClientsContainer";
import { LoginModal } from "../Modals/LoginModal/LoginModal";
import { LogoutModal } from "../Modals/LogoutModal/LogoutModal";
import { EditProfileModal } from "../Modals/EditProfileModal/EditProfileModal";
import { NewClientModal } from "../Modals/NewClientModal/NewClientModal.tsx";

export const Main = () => {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddProfileOpen, setAddProfileOpen] = useState(true);

  const authHandler = auth => {
    setAuth(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  const inOutFunc = logined => {
    logined ? setLogoutModalOpen(true) : setLoginModalOpen(true);
  };

  return (
    <div className={styles.body}>
      <Header inOutFunc={inOutFunc} isAuth={isAuth} setAddProfileOpen={setAddProfileOpen} />
      <ClientsContainer isAuth={isAuth} setModalOpen={setEditProfileOpen} />

      <LoginModal
        isModalOpen={isLoginModalOpen}
        setModalOpen={setLoginModalOpen}
        authHandler={authHandler}
      />
      <LogoutModal
        isModalOpen={isLogoutModalOpen}
        setModalOpen={setLogoutModalOpen}
        authHandler={authHandler}
      />
      <EditProfileModal
        isModalOpen={isEditProfileOpen}
        setModalOpen={setEditProfileOpen}
      />
      <NewClientModal
        isModalOpen={isAddProfileOpen}
        setModalOpen={setAddProfileOpen}
      />
    </div>
  );
};
