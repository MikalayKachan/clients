import React, { useState } from "react";

import styles from './Main.module.css'
import { Header } from "./Header/Header";
import { ClientsContainer } from "./Clients/ClientsContainer";
import { LoginModal } from "../Modals/LoginModal/LoginModal";
import { LogoutModal } from "../Modals/LogoutModal/LogoutModal";
import Modal from "../shared/Modal/Modal";
import { EditProfileModal } from "../Modals/EditProfileModal/EditProfileModal";


export const Main = () => {

    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));

    const [isEditProfileOpen, setEditProfileOpen] = useState(false);

    const authHeandler = (auth) => {
        setAuth(auth)
        localStorage.setItem("auth", JSON.stringify(auth))
    }

    const inOutFunc = (logined) => {
        logined ? setLogoutModalOpen(true) : setLoginModalOpen(true)

    }

    return (
        <div className={styles.body}>
            <Header inOutFunc={inOutFunc} isAuth={isAuth} />
            <ClientsContainer isAuth={isAuth}/>
            <LoginModal isModalOpen={isLoginModalOpen} setModalOpen={setLoginModalOpen} authHeandler={authHeandler} />
            <LogoutModal isModalOpen={isLogoutModalOpen} setModalOpen={setLogoutModalOpen} authHeandler={authHeandler} />
            <EditProfileModal isModalOpen={isEditProfileOpen} setModalOpen={setEditProfileOpen}/>
        </div>
    )
}

