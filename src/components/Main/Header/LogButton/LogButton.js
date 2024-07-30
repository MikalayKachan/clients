import React from "react";

import styles from './LogButton.module.css'
import LogIn from '../../../../ui/icons/log-in.png'

export const LogButton = () => {
    return (
        <div className={styles.main}>
            <img src={LogIn} alt="log in" className={styles.log}/>
            <div className={styles.text}>Sign in</div>
        </div>
    )
}