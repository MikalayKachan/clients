import React from "react";

import styles from './Header.module.css'
import { LogButton } from "./LogButton/LogButton";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>RichBrains</div>
            <div className={styles.fill}>
                <div className={styles.clients}>Clients</div>
                <LogButton/>
            </div>
        </div>
    )
}