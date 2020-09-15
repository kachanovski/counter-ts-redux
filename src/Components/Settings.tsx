import {Field, reduxForm} from "redux-form";
import {InputForm} from "../Forms/InputForm";
import React from "react";
import '../App.css';
import {validate, ValueStateType} from "../Forms/validators";
import {Button} from "../Forms/ButtonForm";
import {useSelector} from "react-redux";
import {StoreReduxType} from "../redux/store";
import {CounterType, disableButton} from "../redux/counterReducer";
import {Dispatch} from "redux";

type SettingsProps = {
    handleSubmit: (formData:any) => void   /////????
    invalid: any
}

const Settings = (props: SettingsProps) => {

    const counter = useSelector<StoreReduxType, CounterType>(state => state.counter)

    return (
        <form className={"container"} onSubmit={props.handleSubmit}>
            <span className={'text'}>START</span>
            <Field name='start' component={InputForm} type={'number'}/>

            <span className={'text'}>MAX</span>
            <Field name='max' component={InputForm} type={'number'}/>
            {counter.isHide ? <div className={"text"}>CHANGE VALUES AND CLICK SET SETTINGS</div> :
                <Button disabled={props.invalid} title={"Set Settings"}/>}

        </form>
    )
}

export const SettingsForm = reduxForm({
    form: 'settingsForm',
    validate: validate,
    onChange(values: Partial<ValueStateType>, dispatch: Dispatch<any>, previousValues: Partial<ValueStateType>) {
        if (values !== previousValues) {
            dispatch(disableButton(false))
        }
    }
})(Settings)