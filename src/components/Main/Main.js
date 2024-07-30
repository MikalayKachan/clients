import React from "react";

import styles from './Main.module.css'
import { Header } from "./Header/Header";
import { ClientsContainer } from "./Clients/ClientsContainer";

export const Main = () => {
    return (
        <div className={styles.body}>
            <Header/>
            <ClientsContainer/>
        </div>
    )
}