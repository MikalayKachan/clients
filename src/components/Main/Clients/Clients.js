import React, { useState } from "react";

import styles from './Clients.module.css'
import { User } from "./User/User";
import sort from '../../../ui/icons/sort.png'
import vector from '../../../ui/icons/vector.png'
import top from '../../../ui/icons/top.png'
import down from '../../../ui/icons/down.png'

export const Clients = () => {

    const [isOpen, setOpen] = useState(true);
    const handleOpen = () => setOpen(!isOpen);

    return (
        <div>
            <div>
                <div className={styles.drop} onClick={handleOpen}>
                    <div className={styles.sortBy}>
                        <img src={sort} alt='sort' className={styles.sort} />
                        <div >
                            Sort by:
                        </div>
                    </div>
                    <div className={styles.select}>
                        <div>{'Name'}</div>
                        <img src={vector} alt='vector' className={styles.vector} />
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
                        <div className={styles.on}>
                            <img src={top} alt='top' className={styles.arrow} />
                            Asc.
                        </div>
                        <div className={styles.off}>
                            <img src={down} alt='down' className={styles.arrow} />
                            Desc.
                        </div>
                    </div>
                </div> : null}
            </div>
            <div className={styles.body}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )
}