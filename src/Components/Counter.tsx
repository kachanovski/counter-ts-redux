import React from "react";
import '../App.css';
import {Input} from "../Forms/Input";
import { Button } from "../Forms/Button";

type CounterType = {
    value: number
    disableButtonIncrement: () => void
    disableButtonReset: () => void
    onClickIncrement: () => void
    onClickReset: () => void
}

export const Counter = (props: CounterType) => {
    return (
        <div className={"container"}>
            <Input value={props.value}/>
            <div>
                <Button disabled={props.disableButtonIncrement()}  onClick={props.onClickIncrement} title={"COUNT"}/>
                <Button disabled={props.disableButtonReset()}  onClick={props.onClickReset} title={"RESET"}/>
            </div>

        </div>
    )
}
