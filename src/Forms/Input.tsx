import React from "react";
import style from './Input.module.css'

type InputPropsType ={
    input: number  //????
}

export const Input = ({input, ...props}: any) => {
    return (
            <div>
                <input readOnly className={style.inputForm} {...input} {...props}/>
            </div>
    )
}


