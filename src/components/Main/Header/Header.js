import React from "react";

import styles from './Header.module.css'
import { LogButton } from "./LogButton/LogButton";
const Plus = '/icons/plus.svg'

export const Header = ({ inOutFunc, isAuth }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>RichBrains</div>
            <div className={styles.fill}>
                <div className={styles.clients}>Clients</div>
                <LogButton inOutFunc={inOutFunc} isAuth={isAuth} />
                {isAuth
                ?
                <div className={styles.plus} onClick={() => inOutFunc(true)}>
                    <img src={Plus} alt="arrow" />
                </div>
                : null
                }
            </div>
        </div>
    )
}