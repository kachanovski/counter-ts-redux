import React from "react";
import style from "./Button.module.css";

type ButtonPropsType = {
    title: string
    disabled: any  ///???????????
    onClick: () => void
}

export const Button = ( props: ButtonPropsType) => {
    return (
        <div >
            <button className={style.neonButton} {...props}>{props.title}</button>
        </div >
    )
}


