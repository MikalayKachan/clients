import React from "react";
import { Clients } from "./Clients";


export const ClientsContainer = ({isAuth}) => {
    return (
        <div >
            <Clients isAuth={isAuth}/>
        </div>
    )
}