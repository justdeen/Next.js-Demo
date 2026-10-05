"use client"

import {useState} from "react";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({children}: {
    children?: React.ReactNode
}) => {
    const [name, setName] = useState("Batman");
    return (
        <>
            <h1>Client component one</h1>
            {children}
        </>
    )
};