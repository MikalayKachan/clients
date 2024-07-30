import React from "react";

import styles from './User.module.css'
import ava1 from '../../../../ui/icons/ava.png'
import phone1 from '../../../../ui/icons/phone.png'
import map1 from '../../../../ui/icons/map-pin.png'
import date1 from '../../../../ui/icons/date.png'


    const ava = ava1
    const phone = phone1
    const map = map1
    const date = date1

export const User = () => {
    

    const name = 'Darrell'
    const country = 'Germany'
    const number = '+44 161 496 0997'
    const birth = '22.10.2001'


    return (
        <div className={styles.user}>
            <img src={ava} alt="ava" className={styles.ava}/>
            <div className={styles.name}>{name}</div>
            <div className={styles.infoString}>
                <img src={map} alt="map" className={styles.pic}/>
                <div>{country}</div>
            </div>
            <div className={styles.infoString}>
                <img src={phone} alt="phone" className={styles.pic}/>
                <div>{number}</div>
            </div>
            <div className={styles.infoString}>
                <img src={date} alt="date" className={styles.pic}/>
                <div>{birth}</div>
            </div>
        </div>
    )
}