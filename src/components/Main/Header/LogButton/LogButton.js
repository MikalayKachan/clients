import React from "react";

import styles from './LogButton.module.css'

const LogIn = '/icons/log-in.svg'
const User = '/icons/user.svg'
const Down = '/icons/chevron-down.svg'

export const LogButton = ({ inOutFunc, isAuth }) => {
    return (
        isAuth
            ?
            <div className={styles.mainOut} onClick={() => inOutFunc(true)}>
                <img src={User} alt="log out" className={styles.out} />
                <div className={styles.textOut}>{"a.gerasimov"}</div>
                <img src={Down} alt="arrow"/>
            </div>
            :
            <div className={styles.mainIn} onClick={() => inOutFunc(false)}>
                <img src={LogIn} alt="log in" className={styles.log} />
                <div className={styles.textIn}>Sign in</div>
            </div>
    )
}