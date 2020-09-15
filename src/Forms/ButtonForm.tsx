import React from "react";
import style from "./Button.module.css";

type ButtonFormPropsType = {
    title: string
    disabled: boolean
}

export const ButtonForm = ( props: ButtonFormPropsType) => {
    return (
        <div >
            <button className={style.neonButton}{...props}>{props.title}</button>
        </div >
    )
}


