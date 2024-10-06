import React from "react";
import { Clients } from "./Clients";


export const ClientsContainer = ({isAuth, setModalOpen}) => {
    return (
        <div >
            <Clients isAuth={isAuth} setModalOpen={setModalOpen}/>
        </div>
    )
}