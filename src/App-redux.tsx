import React from 'react'
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {StoreReduxType} from './redux/store';
import {
    CounterType,
    disableButton,
    increment,
    resetStartValue,
    setMaxValue,
    setStartValue
} from "./redux/counterReducer";
import {SettingsForm} from "./Components/Settings";
import {Counter} from "./Components/Counter";
import {EmptyComponent} from "./Components/EmptyComponent";

export type onSubmitFormType = {
    max: string
    start: string
}

function AppRedux() {

    const counter = useSelector<StoreReduxType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickIncrement = () => {
        dispatch(increment())
    }
    const onClickReset = () => {
        dispatch(resetStartValue())
    }
    const disableButtonReset = () => {
        return counter.start === counter.count;
    }
    const disableButtonIncrement = () => {
        return counter.max === counter.count;
    }

    let onSubmit = (formData: onSubmitFormType) => {
        dispatch(setStartValue(parseInt(formData.start)))
        dispatch(setMaxValue(parseInt(formData.max)))
        dispatch(disableButton(true))
    }

    return (
        <div className={'App'}>
            <div className={"box"}>
                <SettingsForm onSubmit={onSubmit}/></div>
            <div className={"box"}>
                {counter.start && counter.isHide
                    ? <Counter value={counter.count}
                               disableButtonReset={disableButtonReset}
                               disableButtonIncrement={disableButtonIncrement}
                               onClickIncrement={onClickIncrement}
                               onClickReset={onClickReset}/>
                    : <EmptyComponent/>} </div>


        </div>
    )
}

export default AppRedux

