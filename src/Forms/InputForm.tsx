import React from "react";
import style from './Input.module.css'
import {WrappedFieldProps} from "redux-form";

export const InputForm = ({input, meta, ...props}: WrappedFieldProps) => {

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

