import React, { useEffect, useState } from "react"
import axios from 'axios';

import styles from './Clients.module.css'
import { User } from "./User/User"
import sort from '../../../ui/icons/sort.svg'
import drop from '../../../ui/icons/drop.svg'
import { ReactComponent as Top } from '../../../ui/icons/top.svg'
import { ReactComponent as Down } from '../../../ui/icons/down.svg'

export const Clients = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
        .get(`http://localhost:3333/clients`)
        .then(data => {
            setData(data.data.clients);
        })
    },[])


console.log(data);

    const dataToRender = data.map(c=><User name={c.name} age={c.age} phone={c.phone} country={c.country}/> )

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(!isOpen);

    const [isAsc, setAsc] = useState(true);

    return (
        <div>
            <div>
                <div className={styles.drop} onClick={handleOpen}>
                    <div className={styles.sortBy}>
                        <img src={sort} alt='sort' className={styles.sort} />
                        <div>
                            Sort by:
                        </div>
                    </div>
                    <div className={styles.select}>
                        <div>{'Name'}</div>
                        <img src={drop} alt='drop' />
                    </div>
                </div>
                {isOpen ? <div className={styles.dropContent}>
                    <div className={styles.inputLine}>
                        <input type='radio' />
                        <div className={styles.inputText}>Date of birth</div>
                    </div>
                    <div className={styles.inputLine}>
                        <input type='radio' />
                        <div>Country</div>
                    </div>
                    <div className={styles.toggle}>
                        <div className={isAsc ? styles.on : styles.off} onClick={() => setAsc(true)}>
                            <Top />
                            Asc.
                        </div>
                        <div className={isAsc ? styles.off : styles.on} onClick={() => setAsc(false)}>
                            <Down />
                            Desc.
                        </div>
                    </div>
                </div> : null}
            </div>
            <div className={styles.body}>
                {dataToRender}
            </div>
        </div>
    )
}