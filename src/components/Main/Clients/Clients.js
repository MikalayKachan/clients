import React from "react";

import styles from './Clients.module.css'
import { User } from "./User/User";

export const Clients = () => {
    return (
        <div className={styles.body}>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    )
}