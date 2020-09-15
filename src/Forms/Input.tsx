import React from "react";
import style from './Input.module.css'

type InputPropsType ={
    value: number
    readonly?: boolean
}

export const Input = (props: InputPropsType) => {
    return (
            <div>
                <input readOnly className={style.inputForm} {...props}/>
            </div>
    )
}


