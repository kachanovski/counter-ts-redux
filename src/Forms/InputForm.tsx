import React from "react";
import style from './Input.module.css'

export const InputForm = ({input, meta,onChange, ...props}: any) => {

    return (
        <div>
            <div>
                 <span>
                     {meta.touched && meta.error
                        ? <span className={style.tooltip}>{meta.error}</span>
                        : ""}
            </span>
            </div>
            <div>
                <input   className={style.inputForm} {...input} {...props}/>

            </div>
        </div>
    )
}

/*
onChange={e => {
input.onChange()
updateName(e.currentTarget.value)
}}
*/

