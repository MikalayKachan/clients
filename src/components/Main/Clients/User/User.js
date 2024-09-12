import React from "react";

import styles from './User.module.css'
/* import ava1 from 'icons/ava.svg' 
import phone1 from 'icons/phone.svg'
import map1 from 'icons/map-pin.svg'
import date1 from 'icons/date.svg' */


const ava = '/icons/ava.svg'
const phone = '/icons/phone.svg'
const map = '/icons/map-pin.svg'
const date = '/icons/date.svg'

export const User = (props) => {


    const name = props.name
    const country = props.country
    const number = props.phone
    const birth = props.age


    return (
        <div className={styles.user}>
            <img src={ava} alt="ava" className={styles.ava} />
            <div className={styles.name}>{name}</div>
            <div className={styles.infoString}>
                <img src={map} alt="map" className={styles.pic} />
                <div>{country}</div>
            </div>
            <div className={styles.infoString}>
                <img src={phone} alt="phone" className={styles.pic} />
                <div>{number}</div>
            </div>
            <div className={styles.infoString}>
                <img src={date} alt="date" className={styles.pic} />
                <div>{birth}</div>
            </div>
        </div>
    )
}