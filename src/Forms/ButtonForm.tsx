import React from "react";
import style from "./Button.module.css";

export const Button = ({button, meta, ...props}: any) => {
    return (
        <div >
            <button className={style.neonButton} {...button} {...props}>{props.title}</button>
        </div >
    )
}


